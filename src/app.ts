import { Component, provide, OnInit, OpaqueToken, Inject } from '@angular/core';
// import { ROUTER_DIRECTIVES, Routes } from '@angular/router';
let APP_CONFIG = new OpaqueToken('APP_CONFIG');
import {CONFIG} from './config/app-config';
import { HTTP_PROVIDERS } from '@angular/http';
import { routes } from './config/route';
import {LocationStrategy, HashLocationStrategy, Location} from '@angular/common';
import {NavBar} from './components/navigation-bar/navbar';

import {Footer} from './components/footer/footer.component';
import {Header} from './components/header/header.component';


@Component({
  selector: 'cms',
  template: `

  <header-section> </header-section>
  <navbar>  </navbar>


  <route-view></route-view>
  <footer-section></footer-section>

    `,
    directives: [Header, NavBar, Footer],
  providers: [provide(APP_CONFIG, {useValue: CONFIG}),HTTP_PROVIDERS]
})

export class AppComponent implements OnInit{
  ngOnInit() {

  }
  constructor( @Inject(APP_CONFIG) private config,_location: Location){

  }
}
