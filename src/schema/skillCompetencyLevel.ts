import { gql } from 'apollo-server';

const skillCompetencyLevelSchema = gql`
  type SkillCompetencyLevel {
    level: String
    id: Int
  }

  extend type Query {
    skillCompetencyLevels: [SkillCompetencyLevel]
  }
`;

export default skillCompetencyLevelSchema;
