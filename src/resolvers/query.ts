import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async countriesList(_: void, __: any, { dataSources }) {
            return await dataSources.seasons.getCountries().then(
                (data: any) => console.log(data)
                //(data: any) => data.MRData.SeasonTable.Seasons
            );
        }
    }
};

export default query;