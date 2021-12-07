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
import React, { Component, useState, useEffect, useCallback } from 'react';
import NextLink from 'next/link';
import { API_URL } from '../environment';
import Layout from '../components/Layout';
import { collections } from './api/graphQL/graphQL';
import { getSelections } from './api/graphQL/graphQL';
import useStyles from '../utils/styles';

export default function Selections(props) {
  const [state, setState] = React.useState({
    left: false,
    right: false,
    anchor: '',
  });
  // let currentProduct = props.selections[0].products;
  const toggleDrawer = (anchorState, open) => (event) => {
    // setState({ ...state, ['anchor']: anchorState });
    setState({ ...state, [anchorState]: open, ['anchor']: anchorState });
  };
  const chooseCollection = (index) => (event) => {
    currentProduct = props.selections[index].products;
  };

  const size = useWindowSize();
  let currentMargin;
  if (size.width < 700) {
    currentMargin = `10rem`;
  } else {
    currentMargin = `30rem`;
  }
  if (typeof window !== 'undefined') {
  }
  console.log(props);
  const list = (anchor) => (
    <List>
      {props.selections.map((collection, index) => {
        return (
          <ListItem key={collection.id}>
            {/* <NextLink href="/projects" passHref>
            <Link> */}
            <Button onClick={chooseCollection(index)}>
              <Typography className={classes.drawerItem}>
                {collection.title}
              </Typography>
            </Button>
            {/* </Link>
          </NextLink> */}
          </ListItem>
        );
      })}
      {/* <ListItem>
        <NextLink href="/projects" passHref>
        <Link>
        <Typography className={classes.drawerItem}>Проекти</Typography>
        </Link>
        </NextLink>
      </ListItem> */}
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
        Butonche
      </Button>
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={state[state.anchor]}
        variant="permanent"
        // open={true}
        onClose={toggleDrawer(state.anchor, false)}
      >
        {list(state.anchor)}
      </Drawer> */}
      <Grid container spacing={3} style={{ width: '100%', margin: '0' }}>
        {props.selections.map((product) => (
          <Grid item sm={4} key={product.name}>
            <Card raised="true">
              {/* <NextLink href={`/product/${product.slug}`} passHref> */}
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
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      backgroundColor: '#D6D6D6',
                      textAlign: 'center',
                      marginLeft: currentMargin,
                      color: 'black',
                      padding: '5px',
                    }}
                  >
                    {product.price}&nbsp;BGN
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* </NextLink> */}
              <CardActions></CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

Selections.getInitialProps = async (ctx) => {
  let data = await getSelections();
  let selections = data.products;
  // let data = await collections();
  // let selections = data.collections;

  return {
    selections,
  };
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}
