import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';

// import Button from '@material-ui/core/Button';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';

import React from 'react';
import { NextLink } from 'next/link';

const products = [
  {
    name: 'Free Shirt',
    slug: 'free-shirt',
    category: 'Shirts',
    image: '/media/media-1.jpg',
    isFeatured: true,
    featuredImage: '/media/media-1.jpg',
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
function ProductsBox() {
  return (
    <div>
      <h1>Products Here we are</h1>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} key={product.name}>
            <span>${product.price}</span>
            <Card>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    src={product.image}
                    title={product.brand}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size="small" color="primary">
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
// export async function getInitialProps() {
//   await db.connect();
//   const products = await Product.find({}).lean();
//   await db.disconnect();
//   return {
//     props: {
//       products: products.map(db.convertDocToObj),
//     },
//   };
// }

export default ProductsBox();
