import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {
  data:any;

  constructor(public http: Http) {
    console.log('Hello MyData Provider');
  }
  getMyData()
  {

    return new Promise(resolve => {
      this.http.get('assets/files/data.json')
        .map(res =>res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log(this.data);
        })
    })
}
}
