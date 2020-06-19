import { gql } from 'apollo-server';

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
