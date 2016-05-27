import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide, OpaqueToken}   from '@angular/core';
let APP_CONFIG = new OpaqueToken('APP_CONFIG');
import {CONFIG} from './config/app-config';
import { routes } from './config/route';
import { provideRouter } from '@ngrx/router';

import {ROUTER_PROVIDERS}     from '@angular/router-deprecated';
import {LocationStrategy}     from '@angular/common';
import {HashLocationStrategy} from '@angular/common';

import {AppComponent} from './app.ts'
// import {enableProdMode} from '@angular/core';
//
// enableProdMode();

var strategy = provide(LocationStrategy, { useClass: HashLocationStrategy });
bootstrap(AppComponent, [
    provideRouter(routes),
    provide(APP_CONFIG, {useValue: CONFIG}),
    ROUTER_PROVIDERS,
    strategy
]);
