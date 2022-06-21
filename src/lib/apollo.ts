import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4o90hy71cgi01xmc79eg363/master",
  cache: new InMemoryCache(),
});
