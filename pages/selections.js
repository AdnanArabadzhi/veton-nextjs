import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import React, { Component } from 'react';
import NextLink from 'next/link';
import { API_URL } from '../environment';
import Layout from '../components/Layout';
import { selections } from './api/graphQL/graphQL';
import useStyles from '../utils/styles';

export default function Selections(props) {
  const [state, setState] = React.useState({
    left: false,
    right: false,
    anchor: '',
  });

  const toggleDrawer = (anchorState, open) => (event) => {
    // setState({ ...state, ['anchor']: anchorState });
    console.log(anchorState);
    setState({ ...state, [anchorState]: open, ['anchor']: anchorState });
  };

  const list = (anchor) => (
    <List>
      <ListItem className={classes.drawerListItem}>
        <NextLink href="/selections" passHref>
          <Link>
            <Typography className={classes.drawerItem}>Колекции</Typography>
          </Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/projects" passHref>
          <Link>
            <Typography className={classes.drawerItem}>Проекти</Typography>
          </Link>
        </NextLink>
      </ListItem>
    </List>
  );
  const classes = useStyles();
  console.log(props);
  return (
    <Layout>
      {/* <Button
        className={classes.brand}
        style={{ width: '50vh' }}
        onClick={toggleDrawer('right', true)}
      >
        Butinche
      </Button>
      <Drawer
        className={classes.drawer}
        anchor={state.anchor}
        open={state[state.anchor]}
        onClose={toggleDrawer(state.anchor, false)}
      >
        {list(state.anchor)}
      </Drawer> */}
      <Grid container spacing={3} style={{ width: '100%' }}>
        {props.products.map((product) => (
          <Grid item sm={4} key={product.name}>
            <Card raised="true">
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={API_URL + product.gallery[0].url}
                    title={product.brand}
                    style={{ height: '100%', width: '100%' }}
                  ></CardMedia>
                  <CardContent
                    style={{
                      textAlign: 'start',
                    }}
                  >
                    <Typography>{product.Title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.Description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

Selections.getInitialProps = async (ctx) => {
  let data = await selections();
  let products = data.products;

  return {
    products,
  };
};
