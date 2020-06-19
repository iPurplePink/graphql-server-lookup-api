import regions from '../../data/regions';
import sortBy from 'lodash/sortBy';

const getRegions = () => {
  return sortBy(regions, region => region.name);
};

export default getRegions;
