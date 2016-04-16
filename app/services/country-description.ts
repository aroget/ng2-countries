import {Injectable} from 'angular2/core';
import {Http, URLSearchParams}    from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export interface CountryDescriptionInterface {
  summary: string,
  elevation: number,
  geoNameId: number,
  feature: string,
  lng: number,
  countryCode: string,
  rank: number,
  thumbnailImg: string,
  lang: string,
  title: string,
  lat: number,
  wikipediaUrl: string
}


@Injectable()
export class CountryDescriptionService {
    url: string;

    constructor(private http:Http) {
        this.url = 'http://api.geonames.org/wikipediaSearchJSON?formatted=true&maxRows=1&username=aroget&style=full';
        // this.url = './mock/country-description.json';
    }

    getData(query, lang) {

        const searchParams = new URLSearchParams()
        searchParams.set('q', query);
        searchParams.set('lang', lang);

        return this.http.get(this.url, {search: searchParams})
                .map(res => res.json())
    }
}
