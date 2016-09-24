/**
 * Created by demon on 2016/9/24.
 */
import {ModuleWithProviders}   from '@angular/core';
import {Routes, RouterModule}  from '@angular/router';
import AsyncComponent from "./async.component";
const asyncRoutes: Routes = [
  {
    path: '',
    component: AsyncComponent
  }
];
const asyncRouting: ModuleWithProviders = RouterModule.forChild(asyncRoutes);
export default asyncRouting;