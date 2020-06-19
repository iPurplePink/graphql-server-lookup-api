import { gql } from 'apollo-server-express';

import regionsSchema from './regions';
import sexesSchema from './sexes';
import impactAreasSchema from './impactAreas';

const linkSchema = gql`
  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, regionsSchema, sexesSchema, impactAreasSchema];
