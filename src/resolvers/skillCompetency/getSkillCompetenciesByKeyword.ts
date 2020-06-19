import skillCompetencies from '../../data/skillCompetencies';
import sortBy from 'lodash/sortBy';

const getSkillCompetenciesByKeyword = (_parent: any, args: any) => {
  const keyword = args.keyword || '';
  return sortBy(
    skillCompetencies.filter(skillCompetency =>
      skillCompetency.name
        .toLocaleLowerCase()
        .includes(keyword.toLocaleLowerCase())
    ),
    skillCompetency => skillCompetency.name
  );
};

export default getSkillCompetenciesByKeyword;
