import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GuageService {
  data = new ReplaySubject();

  constructor() {
    this.data.next({
      'name': 'Germany',
      'value': 8940000
    });
    this.data.next({
      'name': 'USA',
      'value': 5000000
    });
    this.data.next({
      'name': 'France',
      'value': 7200000
    });
  }
  getData(): Observable<any> {
    return this.data;
  }
  add(reading) {
    this.data.next(reading);
  }
}
