import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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
  SelectedQuantity=0;
  ShowBox:Boolean = false;
  LocalStorageCartArray:any = []
  LocalStorageSpecificArray:any = [];

  constructor(
    private _MessengerService: MessengerService,
    private _DataService: DataServiceService,
    private _NonVolatileService: NonVolatileService,
    private _ToastrService:ToastrService
  ) { }

  ngOnInit(): void {
    //Yahan say meray pass data aa rahay hai with the help of 
    this._MessengerService.GetMessageWithData().subscribe(
      (DataComingFromMyMessengerService: any) => {
        this.Data = DataComingFromMyMessengerService;
      }
    )
    this.GetDataFromMyService();
    this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
    if(Object.entries(this.LocalStorageCartArray).length !== 0){
      this.ShowBox = true;
    }
  }

  GetDataFromMyService() {
    this.DataFromMyService = this._DataService.GetData();
    if (this.Data === undefined) {
      const Id = this._NonVolatileService.GetDataFromLocalStorgae();
      this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === Id) });
      this.ProductQuantity = this.FilteredArray[0].qty;
      return
    }
    this.FilteredArray = this.DataFromMyService.filter((Result: any) => { return (Result._id === this.Data.Id) });
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

  AddQuantity(Id:any) {
    this.ShowBox = true;
    let CartObjectPlus = this._NonVolatileService.GetProdcutToLocalStorage();
    //Agar Quantity Increase Kar Jae New Quanityt To Khatam Kar do Yeh Fucntion
    if (this.SelectedQuantity >= this.ProductQuantity) {
      this._ToastrService.error('Quantiyy cannot Exceed that Original Quanityt');
      return
    }
    
    //First Time Jaab LocalStorage main Khuch nahi Para Hua

    if(Object.entries(CartObjectPlus).length === 0){
      this.CartArray.push(this.FilteredArray[0]);
      this._NonVolatileService.AddProdcutToLocalStorage(this.CartArray);
      this.Data = undefined;
      this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
      return
    }

    //Abb LoaclStorage main Data Para Hua hai Lakin Hum nay dekhana hai k Quantity Increase hoo lakin jaab new 
    // Data Peechay say Aye Taab wo Push karay Sara

    if(Object.entries(CartObjectPlus).length !== 0 && this.Data !== undefined){
      this.NewCartArray.push(this.FilteredArray[0]);
      CartObjectPlus.forEach((element:any) => {
        this.NewCartArray.push(element);
      });
      this._NonVolatileService.AddProdcutToLocalStorage(this.NewCartArray);
      this.Data = undefined;
      this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
      return
    }

      CartObjectPlus.map((element:any) => {
        if(this.FilteredArray[0]._id === element._id){
          element.NewQuantity++;
          this.SelectedQuantity++;
        }
       });
       this._NonVolatileService.AddProdcutToLocalStorage(CartObjectPlus);
       this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
       this.LocalStorageCartArray = this._NonVolatileService.GetProdcutToLocalStorage();
  }

  SubQuantity(Id:any) {

    let CartObjectPlus = this._NonVolatileService.GetProdcutToLocalStorage();
    if (this.SelectedQuantity <= 0) {
      return
    }

    CartObjectPlus.map((element:any) => {
      if(this.FilteredArray[0]._id === element._id){
        console.log(element);
        element.NewQuantity--;
        this.SelectedQuantity--;
      }
     });
     this._NonVolatileService.AddProdcutToLocalStorage(CartObjectPlus);
     this._NonVolatileService.SetUserMiscellaneousInformation(this.CartQuantity);
  }

}
