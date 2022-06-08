import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/SharedPortal/Services/data-service.service';
import { MessengerService } from 'src/app/SharedPortal/Services/messenger.service';
import { NonVolatileService } from 'src/app/SharedPortal/Services/non-volatile.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  Data:any;
  DataFromMyService:any =[];
  FilteredArray:any = [];
  PublicId:any;
  CartQuantity:any = 0;
  ProductQuantity:any ;
  ShowCart:Boolean = false;
  FinalUserCartArray:any =[];

  constructor(
    private _MessengerService:MessengerService,
    private _DataService:DataServiceService,
    private _NonVolatileService:NonVolatileService
  ) { }

  ngOnInit(): void {
    //Yahan say meray pass data aa rahay hai with the help of 
   this._MessengerService.GetMessageWithData().subscribe(
     (DataComingFromMyMessengerService:any) =>{
     this.Data = DataComingFromMyMessengerService;
   }
   )
   this.GetDataFromMyService();
  }

  GetDataFromMyService(){
    this.DataFromMyService = this._DataService.GetData();
    if( this.Data === undefined ){
    const Id = this._NonVolatileService.GetDataFromLocalStorgae();
    this.FilteredArray = this.DataFromMyService.filter( (Result:any) =>{ return ( Result._id === Id ) });
    this.ProductQuantity = this.FilteredArray[0].qty;
    return
    }
    this.FilteredArray = this.DataFromMyService.filter( (Result:any) =>{ return ( Result._id === this.Data ) });
    this.ProductQuantity = this.FilteredArray[0].qty;
  }

  AddQuantity(){
    if(this.CartQuantity >= this.ProductQuantity){
      return
    }
    this.CartQuantity++;
    this.ShowCart = true;
    let NewObject  = this.FilteredArray[0];
    NewObject.UserSelectedQuantity = this.CartQuantity;
    this.FinalUserCartArray.push(NewObject);
    this._NonVolatileService.AddProdcutToLocalStorage(this.FinalUserCartArray);
    let localStorageData = this._NonVolatileService.GetProdcutToLocalStorage();
    this.FinalUserCartArray.forEach((element:any) => {
      if(element._id === localStorageData._id){
        element.UserSelectedQuantity = this.CartQuantity;
      }
    });
    this._NonVolatileService.AddProdcutToLocalStorage(this.FinalUserCartArray);
  }

  SubQuantity(){
    if(this.CartQuantity <= 0 ){
      return
    }
    this.CartQuantity--;
  }

}
