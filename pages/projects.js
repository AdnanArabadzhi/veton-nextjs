import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { Component } from 'react';
import NextLink from 'next/link';
import { API_URL } from '../environment';
import Layout from '../components/Layout';
import { projects } from './api/graphQL/graphQL';

export default function Projects(props) {
  console.log(props);
  return (
    <Layout>
      <Grid container spacing={3} style={{ width: '100%', margin: '0' }}>
        {props.projectSet.map((project) => (
          <Grid item sm={4} key={project.name}>
            <Card raised="true">
              {/* <NextLink href={`/project/${project.slug}`} passHref> */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  src={API_URL + project.gallery[0].url}
                  title={project.brand}
                  style={{ height: '100%', width: '100%' }}
                ></CardMedia>
                <CardContent
                  style={{
                    textAlign: 'start',
                  }}
                >
                  <Typography>{project.Title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.Description}
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

Projects.getInitialProps = async (ctx) => {
  let data = await projects();
  let projectSet = data.projects;

  return {
    projectSet,
  };
};
