import {Injectable} from 'angular2/core';
import {Http, URLSearchParams}    from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export interface ResultsInterface {
    adminCode1: string,
    adminName1: string,
    countryCode: string,
    countryId: number,
    countryName: string,
    fcl: string,
    fclName: string,
    fcode: string,
    fcodeName: string,
    geonameId: number,
    lat: string,
    lng: string,
    name: string,
    population: number,
    toponymName: string

}


@Injectable()
export class MainSearch {
    query: string;
    url: string;

    constructor(private http:Http) {
        // this.url = 'http://api.geonames.org/searchJSON?formatted=true&maxRows=10&lang=en&username=aroget&style=medium';
        this.url = './mock/data.json';
    }

    getData(query) {

        const searchParams = new URLSearchParams()
        searchParams.set('name', query);
        return this.http.get(this.url, {search: searchParams})
                .map(res => res.json())
    }
}
