import { RESTDataSource } from 'apollo-datasource-rest';

export class Covid extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://opendata.ecdc.europa.eu/covid19/casedistribution/';
    }
}