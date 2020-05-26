import { Covid } from './data-source';

export class CountriesData extends Covid {
    constructor() {
        super();
    }

    async getCountries() {
        return await this.get(`json`, {
            cacheOptions: { ttl: 60 }
        });
    }

}