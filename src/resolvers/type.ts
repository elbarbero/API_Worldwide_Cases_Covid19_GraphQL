import { IResolvers } from 'graphql-tools';

const type: IResolvers = {
    Country: {
        id: parent => parent.countryterritoryCode,
        name: parent => parent.contriesAndTerritories,
    }
};

export default type;