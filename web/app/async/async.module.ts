/**
 * 异步路由模块
 * Created by demon on 2016/9/24.
 */
import {NgModule} from "@angular/core";
import asyncRouting from "./async.routing";
import AsyncComponent from "./async.component";

@NgModule({
  imports: [
    asyncRouting
  ],
  declarations: [
    AsyncComponent
  ]
})
export class AsyncModule {

}
