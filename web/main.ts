/**
 * Client Main Script
 * Created by demon on 2016/9/23.
 */
import './libs/css/main.css'
import 'rxjs';
import 'core-js/client/shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'ts-helpers';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import AppModule from "./app/app.module";
import {enableProdMode} from "@angular/core";


if (process.env.NODE_ENV == 'production') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);