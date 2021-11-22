import React, { useContext } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  createMuiTheme,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  Switch,
  Badge,
  Drawer,
  Button,
  List,
  ListItem,
  Grid,
  Paper,
  Icon,
} from '@material-ui/core';
// import FacebookRoundedIcon from '@material-ui/icons/FacebookRounded';
import Facebook from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import useStyles from '../utils/styles';
import Link from 'next/link';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import theme from '../utils/theme';
import Sidebar from './Sidebar';
// import 'bootstrap/dist/css/bootstrap.css';

export default function Layout({ title, children, description }) {
  // const { state, dispatch } = useContext(Store);
  const [state, setState] = React.useState({
    left: false,
    right: false,
    anchor: '',
  });

  const toggleDrawer = (anchorState, open) => (event) => {
    // setState({ ...state, ['anchor']: anchorState });
    setState({ ...state, [anchorState]: open, ['anchor']: anchorState });
  };

  const list = (anchor) => (
    <List>
      <ListItem className={classes.drawerListItem}>
        <NextLink href="/products" passHref>
          <Link>
            <Typography className={classes.drawerItem}>Колекции</Typography>
          </Link>
        </NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/selections" passHref>
          <Link>
            <Typography className={classes.drawerItem}>Проекти</Typography>
          </Link>
        </NextLink>
      </ListItem>
    </List>
  );

  const classes = useStyles();

  // if (typeof window !== 'undefined') {
  //   React.render(<MainWrapper />, document.getElementById('root'));
  // }
  // const theme = createMuiTheme({
  //   typography: {
  //     h1: {
  //       fontSize: '1.6rem',
  //       fontWeight: 400,
  //       margin: '1 rem 0',
  //     },
  //     h2: {
  //       fontSize: '1.4rem',
  //       fontWeight: 400,
  //       margin: '1 rem 0',
  //     },
  //   },
  //   palette: {
  //     // type: darkMode ? 'dark' : 'light',
  //     primary: {
  //       main: '#D8D8D8',
  //     },
  //     secondary: {
  //       main: '#FFFFFF',
  //     },
  //   },
  // });
  // const darkModeChangeHandler = () => {
  //   dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });
  //   const newDarkMode = !darkMode;
  //   Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  // };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Veton Studio` : 'Veton Studio'}</title>
        {description && <meta name="description" content={description}></meta>}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="sticky" className={classes.navbar} color="primary">
          <Toolbar color="primary" className={classes.toolbar}>
            <Button
              className={classes.brand}
              style={{ width: '50vh' }}
              onClick={toggleDrawer('left', true)}
            >
              Veton
            </Button>

            <NextLink href="/" passHref>
              <Link>
                <Typography
                  className={classes.brand}
                  style={{ width: '120vh' }}
                >
                  Logo
                </Typography>
              </Link>
            </NextLink>
            <NextLink href="/studio" passHref>
              <Link>
                <Button className={classes.brand} style={{ width: '50vh' }}>
                  Studio
                </Button>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          anchor={state.anchor}
          open={state[state.anchor]}
          onClose={toggleDrawer(state.anchor, false)}
        >
          {list(state.anchor)}
        </Drawer>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <div
            style={{
              padding: '7vh',
            }}
          >
            <h1>Veton</h1>
            <h3>Living, learning, & leveling up one day at a time.</h3>
            <Grid
              container
              style={{
                justifyContent: 'center',
              }}
            >
              <Grid
                item
                sx={3}
                style={{
                  padding: '10px',
                }}
              >
                <Link href="https://facebook.com">
                  <Facebook
                    fontSize="large"
                    className={classes.icon}
                  ></Facebook>
                </Link>
              </Grid>
              <Grid
                item
                sx={3}
                style={{
                  padding: '10px',
                }}
              >
                <Link href="https://instagram.com">
                  <InstagramIcon
                    fontSize="large"
                    className={classes.icon}
                  ></InstagramIcon>
                </Link>
              </Grid>
              <Grid
                item
                sx={3}
                style={{
                  padding: '10px',
                }}
              >
                <Link href="https://linkedin.com/">
                  <LinkedInIcon
                    fontSize="large"
                    className={classes.icon}
                  ></LinkedInIcon>
                </Link>
              </Grid>
              <Grid
                item
                sx={3}
                style={{
                  padding: '10px',
                }}
              >
                <Link href="https://gmail.com/">
                  <MailOutlineRoundedIcon
                    fontSize="large"
                    className={classes.icon}
                  ></MailOutlineRoundedIcon>
                </Link>
              </Grid>
            </Grid>
          </div>
        </footer>
      </ThemeProvider>
    </div>
  );
}
