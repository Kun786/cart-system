import { Injectable } from '@angular/core';
import  User  from '../JSONData/User.json';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  DummyData = User
  constructor() { }

  GetData(){
    return this.DummyData;
  }

  function1 (){
    // maqsad 1 rturn to component
    // mad 2 return to backedn
  }

}
