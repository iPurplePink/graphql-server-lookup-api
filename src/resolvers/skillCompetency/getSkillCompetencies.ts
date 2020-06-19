import skillCompetencies from '../../data/skillCompetencies';
import sortBy from 'lodash/sortBy';

const getSkillCompetencies = () => {
  return sortBy(skillCompetencies, skillCompetency => skillCompetency.name);
};

export default getSkillCompetencies;
