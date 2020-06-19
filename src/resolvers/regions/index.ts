import citiesProvincesByRegion from './getCitiesProvincesByRegion';
import regions from './getRegions';

export const regionsResolvers = {
  Query: {
    regions,
    citiesProvincesByRegion
  },
  Region: {
    citiesProvinces: citiesProvincesByRegion
  }
};

export default regionsResolvers;
