import {Injectable} from 'angular2/core';
import {Http, URLSearchParams}    from 'angular2/http';
import {Observable} from 'rxjs/Observable';

export interface WeatherInterface {
  elevation: number,
  lng: number,
  observation: string,
  ICAO: string,
  clouds: string,
  dewPoint: number,
  cloudsCode: string,
  datetime: string,
  countryCode: string,
  temperature: number,
  humidity: number,
  stationName: string,
  weatherCondition: any,
  windDirection: number,
  hectoPascAltimeter: number,
  windSpeed: number,
  lat: number
}


@Injectable()
export class WeatherService {
    url: string;
    lat: number;
    lng: number;

    constructor(private http:Http) {
        // this.url = 'http://api.geonames.org/findNearByWeatherJSON?&username=aroget';
        this.url = './mock/weather.json';
    }

    getData(lat, lng) {

        const searchParams = new URLSearchParams()
        searchParams.set('lat', lat);
        searchParams.set('lng', lng);

        return this.http.get(this.url, {search: searchParams})
                .map(res => res.json())
    }
}
