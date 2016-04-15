import {Injectable} from 'angular2/core';
import {Http, URLSearchParams}    from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export interface CountryDetailsInterface {
  continent: string,
  capital: string,
  languages: string,
  geonameId: number,
  south: number,
  isoAlpha3: string,
  north: number,
  fipsCode: string,
  population: number,
  east: number,
  isoNumeric: number,
  areaInSqKm: number,
  countryCode: string,
  west: number,
  countryName: string,
  continentName: string,
  currencyCode: string
}


@Injectable()
export class CountryDetailsService {
    query: string;
    url: string;
    lang: string;

    constructor(private http:Http) {
        this.url = 'http://api.geonames.org/countryInfoJSON?formatted=true&username=aroget&style=full';
        // this.url = './mock/country-details.json';
    }

    getData(country, lang) {

        const searchParams = new URLSearchParams()
        searchParams.set('country', country);
        searchParams.set('lang', lang);

        return this.http.get(this.url, {search: searchParams})
                .map(res => res.json())
    }
}
