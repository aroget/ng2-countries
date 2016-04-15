import {Component, Input} from 'angular2/core';

import {CountryDescriptionInterface} from '../../services/country-description';

@Component({
  selector: 'country-description',
  template: require('./country-description.html'),
  styles: [require('./country-description.scss')]
})

export class CountryDescriptionComponent {

  @Input() countrydescription: CountryDescriptionInterface
}
