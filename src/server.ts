import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";

import { resolvers, typeDefs } from './animals';
import DatabaseBootstrap from './database';

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  new DatabaseBootstrap().bootstrap();
  console.log(
    `Server is running at http://localhost:4000`
  );
});