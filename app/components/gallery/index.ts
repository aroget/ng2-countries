import {Component, Input} from 'angular2/core';

import {ImagesInterface} from '../../services/images';

@Component({
  selector: 'gallery',
  template: require('./gallery.html'),
  styles: [require('./gallery.scss')]
})

export class GalleryCmp {

  @Input() images: ImagesInterface
}
