// http://www.geonames.org/
// TODO lagunage selector
// TODO statistics from same api

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


import {IndexCmp} from './containers/index/index';
import {ResultsCmp} from './containers/results/index';

@Component({
    selector: 'app',
    template: `
    <div class="container">
      <div id="app" class="six columns offset-by-three column">
        <router-outlet></router-outlet>
      </div>
    </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/', name: 'Index', component: IndexCmp, useAsDefault: true },
    { path: '/results/:name', name: 'Results', component: ResultsCmp }
])

export class AppCmp { }
