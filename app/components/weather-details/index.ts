import {Component, Input} from 'angular2/core';

import {WeatherInterface} from '../../services/weather';

@Component({
  selector: 'weather-details',
  template: require('./weather-details.html'),
  styles: [require('./weather-details.scss')]
})

export class WeatherCmp {

  @Input() weatherdetails: WeatherInterface

}
