/**
 * ng app module
 * Created by demon on 2016/9/23.
 */
import {NgModule, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import AppComponent from "./app.component";
import {removeNgStyles, createNewHosts} from '@angularclass/hmr';
import TestComponent from "./test.component";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    TestComponent
  ],
  bootstrap: [AppComponent]
})
export default class AppModule {
  constructor(public appRef: ApplicationRef) {
  }

  hmrOnInit(store) {
    console.log('HMR store', store);
  }

  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}