import employmentTypeResolvers from './resolvers/employmentType';
import employmentTypeSchema from './schema/employmentType';

import impactAreaResolvers from './resolvers/impactArea';
import impactAreaSchema from './schema/impactArea';

import jobLevelResolvers from './resolvers/jobLevel';
import jobLevelSchema from './schema/jobLevel';

import regionResolvers from './resolvers/region';
import regionSchema from './schema/region';

import sexResolvers from './resolvers/sex';
import sexSchema from './schema/sex';

import skillCompetencyResolvers from './resolvers/skillCompetency';
import skillCompetencySchema from './schema/skillCompetency';

import skillCompetencyLevelResolvers from './resolvers/skillCompetencyLevel';
import skillCompetencyLevelSchema from './schema/skillCompetencyLevel';

const federatedSchema = [
  {
    resolvers: employmentTypeResolvers,
    typeDefs: employmentTypeSchema
  },
  {
    resolvers: impactAreaResolvers,
    typeDefs: impactAreaSchema
  },
  {
    resolvers: jobLevelResolvers,
    typeDefs: jobLevelSchema
  },
  {
    resolvers: regionResolvers,
    typeDefs: regionSchema
  },
  {
    resolvers: sexResolvers,
    typeDefs: sexSchema
  },
  {
    resolvers: skillCompetencyResolvers,
    typeDefs: skillCompetencySchema
  },
  {
    resolvers: skillCompetencyLevelResolvers,
    typeDefs: skillCompetencyLevelSchema
  }
];

export default federatedSchema;
