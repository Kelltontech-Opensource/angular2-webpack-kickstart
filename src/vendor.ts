// This file is to bundle all dependencies into a single file apart from the
// actual app, using webpack

import 'es6-shim';
import 'reflect-metadata';
require('zone.js/dist/zone');

import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/http';
import '@angular/router-deprecated';
import  '@angular/upgrade';
import '@ngrx/core';
import  '@ngrx/router';
import '@ngrx/router-store';
import  '@ngrx/store';
import  'rxjs/Rx';
