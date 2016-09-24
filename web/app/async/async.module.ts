/**
 * 异步路由模块
 * Created by demon on 2016/9/24.
 */
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import AsyncComponent from "./async.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AsyncComponent
      }
    ])
  ],
  declarations: [
    AsyncComponent
  ]
})
export class AsyncModule {

}
