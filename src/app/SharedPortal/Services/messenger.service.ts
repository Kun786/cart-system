import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  _Subject = new ReplaySubject(1);
  
  constructor() { }

  SendMessageWithData(PlayLoad:any){
    this._Subject.next(PlayLoad);
  }
  
  GetMessageWithData(){
      return this._Subject.asObservable();
  }

}
