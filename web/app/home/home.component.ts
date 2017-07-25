/**
 * Home组件
 * Created by demon on 16-9-23.
 */
import {Component} from "@angular/core";

@Component({
  templateUrl: 'home.template.html',
  styleUrls: ['home.style.css']
})
export default class HomeComponent {
  data = '正在从ezajax中获取数据...';

  async ngOnInit() {
    this.data = (await TestAjax.getData()).data;
  }
}
