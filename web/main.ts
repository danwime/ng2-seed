import {bootloader} from "@angularclass/hmr";
/**
 * Client Main Script
 * Created by demon on 2016/9/23.
 */
declare var process: any;

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import AppModule from "./app/app.module";
import {enableProdMode} from "@angular/core";

if (process.env.NODE_ENV == 'production') {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

bootloader(main);
