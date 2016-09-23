/**
 * 测试Ajax方法
 * Created by demon on 2016/9/23.
 */
export default class Test {
  static async getData() {
    return new Promise((resolve)=> {
      setTimeout(function () {
        resolve({
          data: 'i am data!!'
        });
      }, 3000)
    })
  }
}