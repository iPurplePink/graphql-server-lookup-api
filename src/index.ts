import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({ typeDefs: schema, resolvers });

const app = express();
const port = 8080;

server.applyMiddleware({ app });

app.listen({ port: port }, () => console.log(`🚀 Server ready at ${port}`));
