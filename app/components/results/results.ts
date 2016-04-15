import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import * as Rx from 'rxjs/Rx';

import {ResultsInterface} from '../../services/main-search';

import {CountryDetailsInterface} from '../../services/country-details';
import {CountryDetailsService} from '../../services/country-details';
import {CountryDetailsComponent} from '../country-details/country-details';

import {WeatherInterface} from '../../services/weather';
import {WeatherService} from '../../services/weather';
import {WeatherComponent} from '../weather-details/weather-details';

import {GalleryComponent} from '../gallery/gallery';
import {ImagesService} from '../../services/images';
import {ImagesInterface} from '../../services/images';

import {CountryDescriptionComponent} from '../country-description/country-description';
import {CountryDescriptionService} from '../../services/country-description';
import {CountryDescriptionInterface} from '../../services/country-description';

import {GoogleMapComponent} from '../google-map/google-map';



@Component({
    selector: 'results',
    template: require('./results.html'),
    styles: [require('./results.scss')],
    providers: [HTTP_PROVIDERS, CountryDetailsService, WeatherService, ImagesService, CountryDescriptionService],
    directives: [CountryDetailsComponent, WeatherComponent, GalleryComponent, CountryDescriptionComponent, GoogleMapComponent]
})

export class ResultsComponent {
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
        this.lng = parseInt(params.get('lng'), 10);
        this.lat = parseInt(params.get('lat'), 10);
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
          this.images = res[2].hits,
          this.countrydescription = res[3].geonames
          console.log(res)
        },
        err => console.log(err)
      );
      // TODO handle error
    }


    ngOnInit() {
        this.getData();
    }
}
