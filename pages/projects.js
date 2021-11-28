import { Card, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import { projects } from './api/graphQL/graphQL';

export default function Projects(props) {
  console.log(props);
  return (
    <Layout>
      <Grid container>
        <Grid item>
          <Card>
            <NextLink></NextLink>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}

Projects.getInitialProps = async (ctx) => {
  let data = await projects();
  let products = data.products;

  return {
    products,
  };
};
