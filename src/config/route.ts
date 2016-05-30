import { Route } from '@ngrx/router';
import { NotFound } from '../components/not-found/not-found';
import {AppComponent} from '../app';
import {Home} from '../components/home-page/home.component';

// import {AuthGuard} from './auth.guard';

export const routes: Route[] = [

  {
    path: '/',
    component: Home,
  },
  {
    path: '/**',
    component: NotFound,
    options: {}
  }

];
