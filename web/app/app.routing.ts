/**
 * App 路由配置
 * Created by demon on 16-9-23.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import HomeComponent from "./home/home.component";
import AboutComponent from "./about/about.component";
import ParentComponent from "./parent/parent.component";
import Child1Component from "./parent/child1.component";
import Child2Component from "./parent/child2.component";

const appRoutes: Routes = [
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
  }
];

const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
export default routing;