///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
///<reference path="../typings/browser/ambient/node/index.d.ts" />

import { bootstrap }    from 'angular2/platform/browser';
import { enableProdMode } from "angular2/core";
import { AppComponent } from './app.component';
import 'rxjs/Rx';

enableProdMode();

bootstrap(AppComponent, []);
