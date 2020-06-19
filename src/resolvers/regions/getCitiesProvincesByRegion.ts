import citiesProvinces from '../../data/citiesProvinces';
import { IFieldResolver } from 'apollo-server-express';

interface Request {
  id: number;
}

const getCitiesProvinces: IFieldResolver<Request, Request> = (parent, args) => {
  let id = args.id;
  if (parent) {
    id = parent.id;
  }
  return citiesProvinces.filter(cityProvince => cityProvince.regionId === id);
};

export default getCitiesProvinces;
