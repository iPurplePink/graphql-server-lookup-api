import { gql } from 'apollo-server';

const skillCompetencySchema = gql`
  type SkillCompetencies {
    name: String
    id: String
  }

  extend type Query {
    skillCompetencies: [SkillCompetencies]
    skillCompetenciesByKeyword(keyword: String!): [SkillCompetencies]
  }
`;

export default skillCompetencySchema;
