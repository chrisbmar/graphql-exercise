import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import LaunchesPast from "../LaunchesPast";

const client = new ApolloClient({
  link: createHttpLink({ uri: "https://api.spacex.land/graphql/" }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <LaunchesPast />
  </ApolloProvider>
);

export default App;
