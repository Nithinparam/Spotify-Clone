import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {
  constructor() {}
  invokeSearchCompoFunc = new EventEmitter();
  subsVar: Subscription;
  onEnter(SearchData) {
    this.invokeSearchCompoFunc.emit(SearchData);
  }
}
