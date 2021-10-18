const API_URL = 'http://localhost:1337/graphql';

import homepageQuery from './query/homepageQuery';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import studioQuery from './query/studioQuery';

const client = new ApolloClient({
  uri: API_URL,
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
  console.log(data);
  return data;
}

export async function studio() {
  const data = await fetchAPI(studioQuery);
  console.log(data);
  return data;
}
