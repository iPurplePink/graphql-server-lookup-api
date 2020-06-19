import { gql } from 'apollo-server';

const jobLevelsSchema = gql`
  type JobLevel {
    level: String
    id: Int
  }

  extend type Query {
    jobLevels: [JobLevel]
  }
`;

export default jobLevelsSchema;
