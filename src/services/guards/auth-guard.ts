import {
  Directive,
  Injectable,
  Injector
} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/observable/combineLatest';


import { Guard, Router, TraversalCandidate } from '@ngrx/router';

import { Observable } from 'rxjs/Observable';

import {Permission} from '../permissions';

@Injectable()
export class PermGuard implements Guard {
  constructor(private _permission: Permission, private _router: Router) { }

  protectRoute(candidate: TraversalCandidate) {
    return this._permission
      .authorize(candidate.route.options.permission.rule)
      .take(1)
      .map(res => {
        if (res) {
          return true;
        } else {
          this._router.replace(candidate.route.options.permission.redirectTo);
          return false;
        }
      });
  }
}
