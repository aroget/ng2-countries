import {Component} from 'angular2/core';

import {SearchFormCmp} from '../../components/search-form/index';

@Component({
    selector: 'index',
    template: require('./index.html'),
    styles: [require('./index.scss')],
    directives: [SearchFormCmp]
})

export class IndexCmp { }
