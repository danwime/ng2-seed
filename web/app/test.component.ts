/**
 * Created by demon on 2016/9/23.
 */
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'test',
  template: `<h4>{{data}}</h4>`
})
export default class TestComponent implements OnInit {
  data: string = 'loading...';

  async ngOnInit() {
    this.data = (await TestAjax.getData()).data;
  }
}