import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs';
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
  Data: any;
  DataFromMyService: any = [];
  FilteredArray: any = [];
  PublicId: any;
  CartQuantity: any = 0;
  ProductQuantity: any;
  ShowCart: Boolean = false;
  FinalUserCartArray: any = [];
  CartArray: any = [];
  NewCartArray:any =[];

  constructor(
    private _MessengerService: MessengerService,
    private _DataService: DataServiceService,
    private _NonVolatileService: NonVolatileService
  ) { }

  ngOnInit(): void {
    //Yahan say meray pass data aa rahay hai with the help of 
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComingFromMyMessengerService: any) => {
        this.Data = DataComingFromMyMessengerService;
      }
    )
    this.GetDataFromMyService();
  }

  GetDataFromMyService() {
    this.DataFromMyService = this._DataService.GetData();
    if (this.Data === undefined) {
      const Id = this._NonVolatileService.GetDataFromLocalStorgae();
      this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === Id) });
      this.ProductQuantity = this.FilteredArray[0].qty;
      return
    }
    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data) });
    this.ProductQuantity = this.FilteredArray[0].qty;
  }

  // Increment(Data) {
  //   this.cartItemsTotal = 0;
  //   let _DataIdentity = Data.CartId;
  //   let _DataQuantity = Data.CartItemQuantity;
  //   this.cartItems.map(CartData => {
  //     if (CartData.productId === _DataIdentity) {
  //       if (_DataQuantity < CartData.TotalQuantity) {
  //         CartData.qty++;
  //         this._AddToCartService.SetCartToLocalStorage(this.cartItems);
  //         this.cartTotal = 0;
  //         this.cartItems.forEach(item => {
  //           this.cartTotal += (item.price * item.qty);
  //           this._AddToCartService.SetCartTotal(this.cartTotal);
  //         })
  //       } else {
  //         return null;
  //       }
  //     }
  //   })
  //   this.cartItems.map(_Data => {
  //     this.cartItemsTotal = this.cartItemsTotal + _Data.qty;
  //     this._TotalItems = this.cartItemsTotal;
  //   })
  //   this._AddToCartService.SetNumberOfTotalCartItems(this.cartItemsTotal);

  // }

  AddQuantity() {
    if (this.CartQuantity >= this.ProductQuantity) {
      return
    }
    const CartObject = this._NonVolatileService.GetProdcutToLocalStorage();
    if(Object.entries(CartObject).length === 0){
      this.CartArray.push(this.FilteredArray[0]);
      this._NonVolatileService.AddProdcutToLocalStorage(this.CartArray);
      console.log('yes')
    }else{
      let CartObject = this._NonVolatileService.GetProdcutToLocalStorage();
      let NewArray:any; 
      CartObject.forEach((element:any) => {
        if(this.FilteredArray[0]._id === element._id){
          element.NewQuantity++;
          NewArray = element
        }
        this.CartArray = [];
        this._NonVolatileService.AddProdcutToLocalStorage(this.CartArray);
        this.CartArray.push(NewArray);
        this._NonVolatileService.AddProdcutToLocalStorage(this.CartArray);
       });
    }
    
  }

  SubQuantity() {
    if (this.CartQuantity <= 0) {
      return
    }
    this.CartQuantity--;
  }

}
