import React, { Component } from 'react';
import Layout from '../components/Layout';
import { studio } from './api/graphQL/graphQL';
import Image from 'next/image';
import { Grid } from '@material-ui/core';

export default function Studio(props) {
  let designers = props.designers;

  console.log(designers);
  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}> Our team is all about the hustle</h1>
      <Grid container spacing={3}>
        {designers.map((designer) => (
          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={3}>
                <div style={{ borderRadius: '250px', overflow: 'hidden' }}>
                  <Image
                    className="image"
                    src={'http://localhost:1337' + designer.avatar.url}
                    alt="nz2"
                    width={designer.avatar.width}
                    height={designer.avatar.height}
                    layout="responsive"
                  ></Image>
                </div>
                <Grid item style={{ textAlign: 'center' }}>
                  <h3>{designer.quote}</h3>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <Grid item>
                  <h1>{designer.name}</h1>
                </Grid>
                <Grid item>
                  <h3>{designer.title}</h3>
                </Grid>
                <Grid item>
                  <h3>{designer.description}</h3>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}

Studio.getInitialProps = async (ctx) => {
  let data = await studio();
  let designers = data.designers;
  console.log(designers);

  // const res = await fetch(`http://localhost:1337/products`);
  // const products = await res.json();
  return {
    designers,
  };
};
