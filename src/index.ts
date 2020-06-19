import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import federatedSchema from './federatedSchema';

const server = new ApolloServer({
  schema: buildFederatedSchema(federatedSchema),
  subscriptions: false
});

const port = 8081;

server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
