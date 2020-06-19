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

const federatedSchema = [
  {
    typeDefs: employmentTypeSchema,
    resolvers: employmentTypeResolvers
  },
  {
    typeDefs: impactAreaSchema,
    resolvers: impactAreaResolvers
  },
  {
    typeDefs: jobLevelSchema,
    resolvers: jobLevelResolvers
  },
  {
    typeDefs: regionSchema,
    resolvers: regionResolvers
  },
  {
    typeDefs: sexSchema,
    resolvers: sexResolvers
  }
];

export default federatedSchema;
