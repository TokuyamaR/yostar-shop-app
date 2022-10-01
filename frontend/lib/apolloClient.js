import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

const cache = new InMemoryCache();

function createApolloClient() {
  return new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache,
  });
}

export default createApolloClient;
