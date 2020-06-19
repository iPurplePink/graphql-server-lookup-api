import citiesProvinces from '../../data/citiesProvinces';
import { IFieldResolver } from 'apollo-server';

interface Request {
  id: number;
}

const getCitiesProvinces = (parent: any, args: any) => {
  let id = args.id;
  if (parent) {
    id = parent.id;
  }
  return citiesProvinces.filter(cityProvince => cityProvince.regionId === id);
};

export default getCitiesProvinces;
