/**
 * Client Main Script
 * Created by demon on 2016/9/23.
 */
import './libs/css/main.css'

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import AppModule from "./app/app.module";
import {enableProdMode} from "@angular/core";
import {bootloader} from "@angularclass/hmr";


if (process.env.NODE_ENV == 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
