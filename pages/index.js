// import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import ReactDOM from 'react-dom';
import React, { useState, useEffect, useCallback } from 'react';

// import styles from '../styles/Home.module.css';
import {
  CardActionArea,
  CardMedia,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import { homePage } from './api/graphQL/graphQL';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic';

import data from '../utils/data';
// import '../styles/reset.css';
import Carousel from '../components/Carousel';
import EmblaCarousel from '../components/EmblaCarousel';
import SimpleSlider from '../components/SimpleSlider';
import Sidebar from '../components/Sidebar';
import ProductsBox from '../components/ProductsBox';

// import db from '../utils/db';
// import Product from '../models/Product';
import image from '../media/';

const image1 = require('../public/images/KuhnqS.jpg');
const image2 = require('../public/images/KuhnqS2.jpg');
const image3 = require('../public/images/KuhnqS2.jpg');

const products = [
  {
    name: 'Free Shirt',
    slug: 'free-shirt',
    category: 'Shirts',
    image: '/public/images/KuhnqS.jpg',
    isFeatured: true,
    featuredImage: '/public/images/KuhnqS.jpg',
    price: 70,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    countInStock: 20,
    description: 'A popular shirt',
  },
  {
    name: 'Fit Shirt',
    slug: 'fit-shirt',
    category: 'Shirts',
    image: '/media/media-2.jpg',
    isFeatured: true,
    featuredImage: '/media/media-2.jpg',
    price: 80,
    brand: 'Adidas',
    rating: 4.2,
    numReviews: 10,
    countInStock: 20,
    description: 'A popular shirt',
  },
  {
    name: 'Slim Shirt',
    slug: 'slim-shirt',
    category: 'Shirts',
    image: '/media/media-3.jpg',
    price: 90,
    brand: 'Raymond',
    rating: 4.5,
    numReviews: 10,
    countInStock: 20,
    description: 'A popular shirt',
  },
];

// const ProductsBox = dynamic(() => import('../components/ProductsBox'), {
//   ssr: false,
// });
export default function Home(props) {
  console.log(props);
  const texts = props.texts[0];
  // const dataSet = data;
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
  console.log(size);
  console.log(currentCarousel);

  if (typeof window !== 'undefined') {
    // ReactDOM.render(<Layout />, document.getElementById('root'));
  }

  return (
    <Layout>
      <div>
        {/* <Sidebar></Sidebar> */}
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
                {/* <span>${product.price}</span> */}
                <Card raised="true">
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        src={'http://localhost:1337' + product.gallery[0].url}
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
                  <CardActions>
                    {/* <Typography>${product.price}</Typography> */}
                  </CardActions>
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
                        src={'http://localhost:1337' + product.gallery[0].url}
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
            src={image1}
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

// export async function getServerSideProps() {
//   await db.connect();
//   const products = await Product.find({}).lean();
//   await db.disconnect();
//   return {
//     props: {
//       products: products.map(db.convertDocToObj),
//     },
//   };
// }

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

export const getStaticProps = async () => {
  let data = await homePage();
  console.log(data);
  let products = data.products;
  let carousels = data.carousels;
  let texts = data.hometexts;
  let projects = data.projects;

  // const res = await fetch(`http://localhost:1337/products`);
  // const products = await res.json();
  return {
    props: {
      products,
      carousels,
      texts,
      projects,
    },
  };
};
