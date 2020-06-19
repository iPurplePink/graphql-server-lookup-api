import { gql } from 'apollo-server-express';

const sexesSchema = gql`
  type Sex {
    sex: String
    id: Int
  }

  extend type Query {
    sexes: [Sex]
  }
`;

export default sexesSchema;
