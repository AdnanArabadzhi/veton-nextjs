import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#D6D6D6',
    // backgroundColor: 'transparent',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '150vh',
    minWidth: '100%',
    margin: '0',
    padding: '0',
    // marginTop: '1vh',
    // minHeight: '100vh',
    // '&:slick-slide': {
    //   width: '2500px',
    // },
  },
  drawer: {
    width: '40vh',
  },
  footer: {
    backgroundColor: '#D6D6D6',
    marginTop: '10px',
    textAlign: 'center',
  },
  brand: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    '&:hover': {
      cursor: 'pointer',
    },
    textAlign: 'center',
    maxHeight: '80px',
  },
  drawerItem: {
    width: '40vh',
    minHeight: '56px',
    color: '#D6D6D6',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  grow: {
    flexGrow: 1,
    textAlign: 'center',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  toolbar: {
    justifyContent: 'space-around',
    height: '80px',
  },
  sliderImage: {
    zIndex: 1,
  },
  sliterTitle: {
    zIndex: 2,
  },
  icon: {
    backgroundColor: '#D6D6D6',
    color: '#ffffff',
    transform: 'scale(1.5)',
    '&:hover': {
      cursor: 'pointer',
    },
  },
});
export default useStyles;
