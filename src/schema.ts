import { buildSchema } from 'type-graphql';
import path from 'path'; 

const schema = buildSchema({
    resolvers: [path.join(__dirname, './animals', `**/*-resolver.*s`)],
    validate: false,
});

export default schema; 