import { GRAPHQL_API_URL } from '../../../environment';

// const GRAPHQL_API_URL = 'http://localhost:1337/graphql';

import homepageQuery from './query/homepageQuery';
import studioQuery from './query/studioQuery';
import selectionsQuery from './query/selectionsQuery';
import projectsQuery from './query/projectsQuery';
import collectionsQuery from './query/collectionsQuery';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

async function fetchAPI(queryFromReq, { variables } = {}) {
  // Set up some headers to tell the fetch call
  // that this is an application/json type
  // const headers = { 'Content-Type': 'application/json' };

  // build out the fetch() call using the API_URL
  // environment variable pulled in at the start
  // Note the merging of the query and variables

  let query = queryFromReq;

  const { data } = await client.query({
    query: gql`
      ${query}
    `,
  });
  return data;
}

export async function homePage() {
  const data = await fetchAPI(homepageQuery);
  return data;
}

export async function studio() {
  const data = await fetchAPI(studioQuery);
  return data;
}

export async function getSelections() {
  const data = await fetchAPI(selectionsQuery);
  return data;
}

export async function projects() {
  const data = await fetchAPI(projectsQuery);
  return data;
}

export async function collections() {
  const data = await fetchAPI(collectionsQuery);
  return data;
}
