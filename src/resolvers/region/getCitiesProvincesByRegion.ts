import citiesProvinces from '../../data/citiesProvinces';
import sortBy from 'lodash/sortBy';

const getCitiesProvinces = (parent: any, args: any) => {
  let id = args.id;
  if (parent) {
    id = parent.id;
  }
  return sortBy(
    citiesProvinces.filter(cityProvince => cityProvince.regionId === id),
    cityProvince => cityProvince.name
  );
};

export default getCitiesProvinces;
