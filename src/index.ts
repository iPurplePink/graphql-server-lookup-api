import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import federatedSchema from './federatedSchema';

const server = new ApolloServer({
  schema: buildFederatedSchema(federatedSchema)
});

const port = 8080;

server.listen({ port: port }, () => console.log(`🚀 Server ready at ${port}`));
