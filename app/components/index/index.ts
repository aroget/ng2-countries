import {Component} from 'angular2/core';

import {SearchFormComponent} from '../search-form/search-form';

@Component({
    selector: 'index',
    template: require('./index.html'),
    styles: [require('./index.scss')],
    directives: [SearchFormComponent]
})

export class IndexComponent { }
