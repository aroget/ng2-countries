import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import * as Rx from 'rxjs/Rx';

import {ActionBarCmp} from '../../components/action-bar/index';

import {ResultsInterface} from '../../services/main-search';

import {CountryDetailsInterface} from '../../services/country-details';
import {CountryDetailsService} from '../../services/country-details';
import {CountryDetailsCmp} from '../../components/country-details/index';

import {WeatherInterface} from '../../services/weather';
import {WeatherService} from '../../services/weather';
import {WeatherCmp} from '../../components/weather-details/index';

import {ImagesInterface} from '../../services/images';
import {ImagesService} from '../../services/images';
import {GalleryCmp} from '../../components/gallery/index';

import {CountryDescriptionInterface} from '../../services/country-description';
import {CountryDescriptionService} from '../../services/country-description';
import {CountryDescriptionCmp} from '../../components/country-description/index';

import {GoogleMapCmp} from '../../components/google-map/index';



@Component({
    selector: 'results',
    template: require('./results.html'),
    styles: [require('./results.scss')],
    providers: [HTTP_PROVIDERS, CountryDetailsService, WeatherService, ImagesService, CountryDescriptionService],
    directives: [ActionBarCmp, CountryDetailsCmp, WeatherCmp, GalleryCmp, CountryDescriptionCmp, GoogleMapCmp]
})

export class ResultsCmp {
    country: string;
    lng: number;
    lat: number;
    lang: string;
    name: string;
    countrydetails: CountryDetailsInterface;
    weatherdetails: WeatherInterface;
    images: Array<ImagesInterface>;
    countrydescription: CountryDescriptionInterface;


    constructor(
        private http: Http,
        private countryDetailsService: CountryDetailsService,
        private weatherService: WeatherService,
        private imagesService: ImagesService,
        private params: RouteParams,
        private countryDescriptionService: CountryDescriptionService
    ) {
        this.name = params.get('name');
        this.country = params.get('country');
        this.lang = params.get('lang');
        this.lng = parseFloat(params.get('lng'));
        this.lat = parseFloat(params.get('lat'));
    }

    getData() {
      const countryDetails$ = this.countryDetailsService.getData(this.country, this.lang);
      const weather$ = this.weatherService.getData(this.lat, this.lng);
      const images$ = this.imagesService.getData(this.name);
      const countrydescription$ = this.countryDescriptionService.getData(this.name, this.lang);

      Rx.Observable.forkJoin([countryDetails$, weather$, images$, countrydescription$]).subscribe(
        res => {
          this.countrydetails = res[0].geonames[0],
          this.weatherdetails = res[1].weatherObservation,
          this.images = res[2].hits.length == 3 ? res[2].hits : null,
          this.countrydescription = res[3].geonames
        },
        err => console.log(err)
      );
      // TODO handle error
    }


    ngOnInit() {
        this.getData();
    }
}
