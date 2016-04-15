import {Component, Input} from 'angular2/core';

@Component({
  selector: 'country-details',
  template: require('./country-details.html'),
  styles: [require('./country-details.scss')]
})

export class CountryDetailsCmp {

  @Input() countrydetails: any;

}
