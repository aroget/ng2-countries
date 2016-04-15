import {Component, Input} from 'angular2/core';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
  selector: 'google-map',
  template: require('./google-map.html'),
  styles: [require('./google-map.scss')],
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  providers: [ANGULAR2_GOOGLE_MAPS_PROVIDERS]
})

export class GoogleMapComponent {
  scrollwheel: boolean = false;
  zoom: number = 8;

  @Input() lat: number
  @Input() lng: number

  // ngOnInit() {
  //   lat: this.lat;
  //   lng: this.lng;
  //   scrollwheel: false;
  //   zoom: 8;
  //
  //
  //   function initMap() {
  //     // Create a map object and specify the DOM element for display.
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: this.lat, lng: this.lng},
  //       scrollwheel: false,
  //       zoom: 8
  //     });
  //   }
  // }

}
