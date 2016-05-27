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

@Injectable()
export class Permission {
  private _store: Object = {};

  constructor() {}

  public define(name: string, validation) {
    this._store[name] = validation;
  }

  public authorize(authObj) {
    if (authObj.only && authObj.except) {
      throw new Error('Authorization object cannot contain both [only] and [except]');
    }

    if (authObj.only) {
      return this._checkAuthorization(authObj.only, 'only');
    }

    if (authObj.except) {
      return this._checkAuthorization(authObj.except, 'except');
    }

  }

  private _checkAuthorization(names, type) {
    const mergeObsrArr: Array<Observable<boolean>> = [];

    names.forEach((res) => {
      if (this._store[res]) {
        mergeObsrArr.push(this._store[res].call());

      } else {
        console.warn(`NgPermission: No defined validation for ${res}`);
      }
    });

    return Observable
      .combineLatest(...mergeObsrArr)
      .map((res: Array<boolean>) => {
        let r = res.some(x => x === true);
        if (type === 'only') {
          return !!r;
        }
        if (type === 'except') {
          return !r;
        }
      });

  }
}


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

export const createRule = (rule, redirectTo) => {
  return {
    rule,
    redirectTo
  };
};
