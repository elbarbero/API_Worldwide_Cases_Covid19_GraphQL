import { IResolvers } from 'graphql-tools';
import query from './query';
//import type from './type';

const resolvers : IResolvers = {
    ...query
};

export default resolvers;