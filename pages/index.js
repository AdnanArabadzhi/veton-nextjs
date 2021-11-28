// import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { API_URL } from '../environment';

// import styles from '../styles/Home.module.css';
import {
  CardActionArea,
  CardMedia,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@material-ui/core';

import { homePage } from './api/graphQL/graphQL';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SimpleSlider from '../components/SimpleSlider';

const image1 = require('../public/images/KuhnqS.jpg');

export default function Home(props) {
  const texts = props.texts[0];
  let currentCarousel;
  let styling;
  const size = useWindowSize();
  if (size.width < 600) {
    currentCarousel = {
      gallery: props.carousels[0].gallery,
    };
    styling = `
    .image {
      z-index: 1;
    }

    .title {
      z-index: 2;
      position: absolute;
      background-color: transparent;
      top: 70vh;
      color: white;
      padding-left: 1vh;
    }
  `;
  } else {
    currentCarousel = {
      gallery: props.carousels[1].gallery,
    };
    styling = `
    .image {
      z-index: 1;
    }

    .title {
      z-index: 2;
      position: absolute;
      background-color: transparent;
      top: 80vh;
      color: white;
      padding-left: 5vh;
    }
  `;
  }

  if (typeof window !== 'undefined') {
  }

  return (
    <Layout>
      <div>
        <SimpleSlider
          carousel={currentCarousel}
          styling={styling}
        ></SimpleSlider>
        <div
          style={{
            marginLeft: '2vh',
          }}
        >
          <h1>Колекции</h1>
          <h3>{texts.firstText}</h3>
        </div>
        <div
          style={{
            justifyContent: 'space-around',
            textAlign: '-webkit-center',
          }}
        >
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
        </div>
        <div
          style={{
            marginLeft: '2vh',
          }}
        >
          <h1>Проекти</h1>
          <h3>{texts.secondText}</h3>
        </div>
        <div
          style={{
            justifyContent: 'space-around',
            textAlign: '-webkit-center',
          }}
        >
          <Grid container spacing={3} style={{ width: '100%' }}>
            {props.projects.map((product) => (
              <Grid item sm={4} key={product.name}>
                {/* <span>${product.price}</span> */}
                <Card raised="true">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        src={API_URL + product.gallery[0].url}
                        title={product.brand}
                        style={{ height: '100%', width: '100%' }}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.Title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {product.Description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    {/* <Typography>${product.price}</Typography> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Image
            priority={true}
            src={API_URL + props.products[0].gallery[0].url}
            alt="nz2"
            width={640}
            height={400}
            layout="responsive"
          ></Image>
        </div>
      </div>
    </Layout>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

Home.getInitialProps = async (ctx) => {
  let data = await homePage();
  let products = data.products;
  let carousels = data.carousels;
  let texts = data.hometexts;
  let projects = data.projects;

  return {
    products,
    carousels,
    texts,
    projects,
  };
};
