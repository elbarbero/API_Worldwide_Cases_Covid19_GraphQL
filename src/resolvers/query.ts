import { IResolvers } from 'graphql-tools';

const query: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello World';
        }
    }
};

export default query;