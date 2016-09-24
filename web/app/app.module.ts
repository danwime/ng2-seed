/**
 * ng app module
 * Created by demon on 2016/9/23.
 */
import {NgModule, ApplicationRef} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {removeNgStyles, createNewHosts} from '@angularclass/hmr';

import AppComponent from "./app.component";
import HomeComponent from "./home/home.component";
import AboutComponent from "./about/about.component";
import ParentComponent from "./parent/parent.component";
import Child1Component from "./parent/child1.component";
import Child2Component from "./parent/child2.component";


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {
        path: 'parent', component: ParentComponent,
        children: [
          {path: '', redirectTo: '/parent/child1', pathMatch: 'full'},
          {path: 'child1', component: Child1Component},
          {path: 'child2', component: Child2Component},
        ]
      },
      {path: 'async', loadChildren: 'es6-promise?,[name]!./async/async.module#AsyncModule'}
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ParentComponent,
    Child1Component,
    Child2Component
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