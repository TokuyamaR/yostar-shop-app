import { ApolloClient, InMemoryCache } from "@apollo/client";
import { APP_URL } from "../config";

const cache = new InMemoryCache();

function createApolloClient() {
  return new ApolloClient({
    uri: `${APP_URL}/graphql`,
    cache,
  });
}

export default createApolloClient;
