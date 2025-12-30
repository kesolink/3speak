import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API_URL, // Ensure this environment variable is set correctly
  cache: new InMemoryCache({
    typePolicies: {
      // HivePost doesn't have a unique ID field, so we use author + permlink as the key
      HivePost: {
        keyFields: false, // Don't try to normalize HivePost objects
        merge(existing, incoming, { mergeObjects }) {
          return mergeObjects(existing, incoming);
        },
      },
      Query: {
        fields: {
          socialPost: {
            // socialPost queries should merge by replacing entirely
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;


// import { ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: process.env.REACT_APP_GRAPHQL_API_URL, // Use REACT_APP_ prefix
//   cache: new InMemoryCache(),
// });

// export default client;
