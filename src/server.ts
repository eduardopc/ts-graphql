import "dotenv/config";
import { GraphQLServer } from "graphql-yoga";

import DatabaseBootstrap from './database';
import schema from './schema';

async function bootstrap() {
  const server = new GraphQLServer({
    schema: await schema,
  });

  return server;
}

bootstrap().then((server) =>
server.start(() => {
  new DatabaseBootstrap().bootstrap();
  console.log("Server is running on http://localhost:4000"); 
})
);