import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        async countriesList(_: void, __: any, { dataSources }) {
            //console.log(dataSources);
            return await dataSources.countries.getCountries().then(
                (data: any) => data.records
                //(data: any) => console.log(data)
                //(data: any) => data.MRData.SeasonTable.Seasons
            );
        }
    }
};

export default query;