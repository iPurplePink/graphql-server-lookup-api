import { gql } from 'apollo-server';

const employmentTypesSchema = gql`
  type EmploymentType {
    type: String
    id: Int
  }

  extend type Query {
    employmentTypes: [EmploymentType]
  }
`;

export default employmentTypesSchema;
