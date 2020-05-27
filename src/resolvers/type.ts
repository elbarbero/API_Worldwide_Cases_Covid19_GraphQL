import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
    Country: {
        id: parent => parent.countryterritoryCode,
        name: parent => parent.countriesAndTerritories,
    }
};

export default type;