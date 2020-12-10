import { GraphQLServer } from "graphql-yoga";

import { resolvers, typeDefs } from './animals';

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log(
    `Server is running at http://localhost:4000`
  );
});