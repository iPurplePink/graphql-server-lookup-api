import skillCompetencies from './getSkillCompetencies';
import skillCompetenciesByKeyword from './getSkillCompetenciesByKeyword';

export const skillCompetencyLevelResolvers = {
  Query: {
    skillCompetencies,
    skillCompetenciesByKeyword
  }
};

export default skillCompetencyLevelResolvers;
