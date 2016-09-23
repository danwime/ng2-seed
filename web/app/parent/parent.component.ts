/**
 * 父组件
 * Created by demon on 16-9-23.
 */
import {Component} from '@angular/core'

@Component({
  template: `
    <h2>Parent</h2>
    <hr>
    <ul>
        <li><a routerLink="./child1" routerLinkActive="active">child1</a></li>
        |
        <li><a routerLink="./child2" routerLinkActive="active">child2</a></li>
    </ul>
    <hr>
    <router-outlet></router-outlet>
   `,
  styles: [`
    li {
        display: inline;
    }
   `]
})
export default class ParentComponent {
}
