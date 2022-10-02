import { ApolloClient, InMemoryCache } from "@apollo/client";
import { API_URL } from "../config";

const cache = new InMemoryCache();

function createApolloClient() {
  return new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache,
  });
}

export default createApolloClient;
