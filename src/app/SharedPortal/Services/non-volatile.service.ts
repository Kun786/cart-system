import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NonVolatileService {

  constructor() { }

  SetDataToLocalStorage(Id:any){
    localStorage.setItem('product-id',JSON.stringify(Id));
  }

  GetDataFromLocalStorgae(){
    return JSON.parse(localStorage.getItem('product-id') || '{}');
  }

  AddProdcutToLocalStorage(Data:any){
    localStorage.setItem('user-cart',JSON.stringify(Data));
  }

  GetProdcutToLocalStorage(){
    return JSON.parse(localStorage.getItem('user-cart') || '{}');
  }

}
