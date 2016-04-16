import {Component} from 'angular2/core';

import {SearchFormCmp} from '../../components/search-form/index';

import {ActionBarCmp} from '../../components/action-bar/index';

@Component({
    selector: 'index',
    template: require('./index.html'),
    styles: [require('./index.scss')],
    directives: [SearchFormCmp, ActionBarCmp]
})

export class IndexCmp {

  locale: string = 'en';

  handleLocaleChange(event) {
    this.locale = event.locale;
  }
}
