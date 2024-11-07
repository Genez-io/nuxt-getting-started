import { ApolloClient, InMemoryCache } from '@apollo/client';
import { provideApolloClient } from '@vue/apollo-composable';

const apolloClient = new ApolloClient({
  uri: process.env.GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default defineNuxtPlugin(() => {
  provideApolloClient(apolloClient);
});