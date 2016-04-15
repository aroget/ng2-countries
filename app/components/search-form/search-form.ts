import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Control, FORM_DIRECTIVES, CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {MainSearch} from '../../services/main-search';
import {ResultsInterface} from '../../services/main-search';

@Component({
    selector: 'search-form',
    template: require('./search-form.html'),
    styles: [require('./search-form.scss')],
    providers: [HTTP_PROVIDERS, MainSearch],
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})

export class SearchFormComponent {
    query = new Control();
    results: ResultsInterface;
    error: string;

    constructor(
        private service : MainSearch,
        private router: Router
    ) {
      this.query.valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .switchMap((res) => this.service.getData(res))
                .subscribe(
                  res => this.handleResults(res),
                  err => this.handleError()
                )
    }

    handleResults(res) {
      this.results = res.geonames;
    }

    handleClick(target) {
      this.router.navigate(['Results', {
                          name: this.query.value,
                          lang: 'en',
                          lat: target.lat,
                          lng: target.lng,
                          country: target.countryCode
                        }])
    }

    handleError() {
        this.error = 'Your country was not found';
    }


}
