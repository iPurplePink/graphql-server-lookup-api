import { gql } from 'apollo-server';

const regionSchema = gql`
  type CityProvince {
    name: String
    id: Int
    regionId: Int
  }

  type Region {
    name: String!
    id: Int!
    citiesProvinces: [CityProvince]
  }

  extend type Query {
    regions: [Region]
    citiesProvincesByRegion(regionId: Int!): [CityProvince]
  }
`;

export default regionSchema;
