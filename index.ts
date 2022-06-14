import { AddToCartService } from 'src/app/Shared/Services/add-to-cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetFilesUrl, GetFeatureCardDirectoryUrl } from '../../../configuration/GlobalConstants';
import { MessengerService } from 'src/app/Shared/Services/messenger.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ECommerceDataServiceService } from 'src/app/Shared/Services/e-commerce-data-service.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {

  _YourQuantity=0;
  cart: boolean = false;
  _CheckUrlForFeatureOrProductComponent: boolean;
  flag = 0;
  FileDirectoryUrl = GetFilesUrl;
  FeatureProductDirectoryUrl = GetFeatureCardDirectoryUrl;
  _DataSizes: any = [];
  _Data: any = [];
  _GetProductData: any;
  GymCateGory: any;
  ProductName: any;
  Price: any;
  _Size: any = [];
  Color: string;
  Fabrics: string;
  Logos: string;
  Quantity: any;
  ImageDataArray: any = [];
  cartItems: any = [];
  cartTotal = 0;
  cartItemsTotal: any;
  finalcart: any = [];
  _DataForCart: any;
  _CheckFlag: boolean;
  _TotalItems:any;
  constructor(private _FlashMessages: FlashMessagesService ,private _MessengerService: MessengerService, private _EcommerceDataService: ECommerceDataServiceService, private _Router: Router, private _AddToCartService: AddToCartService) { }

  ngOnInit(): void {

    
    this._TotalItems = this._AddToCartService.GetNumberOfTotalCartItems();
    //Block Starts Setting/Getting the Local Storage for ProductData (For Creating Persistent Creat Card)
    this._MessengerService.GetMessageWithData().subscribe((docs: any) => {
      this._EcommerceDataService.SetLocalStorageForProductData(docs);
    });
    this._GetProductData = this._EcommerceDataService.GetLocalStorageForProductData();
    //Block Ends Setting/Getting the Local Storage for ProductData (For Creating Persistent Creat Card)


    //Block Starts for creating viewComponent Persistent
    //After Setting/Getting the local Storage using RxJs we need to use this Data to persist the cart and vieProduct Component

    //If the Product is coming from FeatureProductComponent then set it accordingly
    if (this._GetProductData.Component === "FeatureProductComponent") {
      this._DataForCart = '';
      this._CheckUrlForFeatureOrProductComponent = true;
      this.ImageDataArray = [];

      //Getting the data from DataBase according to the Productid and its for viewComponent
      this._EcommerceDataService.GetFeatureProductsById(this._GetProductData.id).subscribe((DocsCommingFromBackend: any) => {
        this._DataForCart = {
          _Result: DocsCommingFromBackend.Result,
          _Category: 'FeatureProductComponent'
        };
        DocsCommingFromBackend.Result.imgDetails.map(ImageData => {
          this.ImageDataArray.push(ImageData);
        })
        DocsCommingFromBackend.Result.sizeDetails.map(SizeData => {
          this._Size.push(SizeData.size);
        })
        this.GymCateGory = DocsCommingFromBackend.Result.category;
        this.ProductName = DocsCommingFromBackend.Result.productName;
        this.Price = DocsCommingFromBackend.Result.price;
        this.Color = DocsCommingFromBackend.Result.color;
        this.Fabrics = DocsCommingFromBackend.Result.fabric;
        this.Logos = DocsCommingFromBackend.Result.logo;
        this.Quantity = DocsCommingFromBackend.Result.quantity;
      })
      //If the Product is coming from ProductComponent then set it accordingly
    } else if (this._GetProductData.Component === "ProductComponent") {
      this._DataForCart = '';
      this._CheckUrlForFeatureOrProductComponent = false;
      this.ImageDataArray = [];

      //Getting the data from DataBase according to the Productid and its for viewComponent
      this._EcommerceDataService.GetCardDataForViewComponent(this._GetProductData.id).subscribe((DocsCommingFromBackend: any) => {
        this._DataForCart = {
          _Result: DocsCommingFromBackend.Result,
          _Category: 'ProductComponent'
        };
        DocsCommingFromBackend.Result.imgDetails.map(ImageData => {
          this.ImageDataArray.push(ImageData);
        })
        DocsCommingFromBackend.Result.sizeDetails.map(SizeData => {
          this._Size.push(SizeData.size);
        })
        this.GymCateGory = DocsCommingFromBackend.Result.category;
        this.ProductName = DocsCommingFromBackend.Result.productName;
        this.Price = DocsCommingFromBackend.Result.price;
        this.Color = DocsCommingFromBackend.Result.color;
        this.Fabrics = DocsCommingFromBackend.Result.fabric;
        this.Logos = DocsCommingFromBackend.Result.logo;
        this.Quantity = DocsCommingFromBackend.Result.quantity;
      })
    }
    //Block Ends for creating viewComponent Persistent



    //Block Starts for Persisting the Carttotal and CartItems
    //Saving The Data to Cart Items, Getting from LocalStorages
    if (this._AddToCartService.GetCartFromLocalStorage() != null) {
      this.cartItems = this._AddToCartService.GetCartFromLocalStorage();
    }
    else {
      return null;
    }
    //Saving The Data to Cart Items, Getting from LocalStorages

    //Saving The Data to CartTotal, Getting from LocalStorages
    if (this._AddToCartService.GetCartTotal() != null) {
      this.cartTotal = this._AddToCartService.GetCartTotal();
    }
    else {
      return null;
    }
    //Saving The Data to CartTotal, Getting from LocalStorages
    //Block Ends for Persisting the Carttotal and CartItems

    
  }

  
  GotToCheckOut(){
    this._Router.navigate(['CheckOut']);
  }

  //Block Starts for Quantity Management Operations


  Increment(Data) {
    this.cartItemsTotal = 0;
    let _DataIdentity = Data.CartId;
    let _DataQuantity = Data.CartItemQuantity;
    this.cartItems.map(CartData => {
      if (CartData.productId === _DataIdentity) {
        if (_DataQuantity < CartData.TotalQuantity) {
          CartData.qty++;
          this._AddToCartService.SetCartToLocalStorage(this.cartItems);
          this.cartTotal = 0;
          this.cartItems.forEach(item => {
            this.cartTotal += (item.price * item.qty);
            this._AddToCartService.SetCartTotal(this.cartTotal);
          })
        } else {
          return null;
        }
      }
    })
    this.cartItems.map(_Data => {
      this.cartItemsTotal = this.cartItemsTotal + _Data.qty;
      this._TotalItems = this.cartItemsTotal;
    })
    this._AddToCartService.SetNumberOfTotalCartItems(this.cartItemsTotal);

  }

  Decrement(Data) {
    this.cartItemsTotal = 0;
    let _DataIdentity = Data.CartId;
    let _DataQuantity = Data.CartItemQuantity;
    if (_DataQuantity > 1) {
      this.cartItems.map(CartData => {
        if (CartData.productId === _DataIdentity) {
          CartData.qty--;
          this._AddToCartService.SetCartToLocalStorage(this.cartItems);
        }
      })
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.price * item.qty);
        this._AddToCartService.SetCartTotal(this.cartTotal);
      })
    } else {
      return null;
    }

    this.cartItems.map(_Data => {
      this.cartItemsTotal = this.cartItemsTotal + _Data.qty;
      this._TotalItems = this.cartItemsTotal;
    })
    this._AddToCartService.SetNumberOfTotalCartItems(this.cartItemsTotal);
  }

  DeleteItem(CartId) {
    this.cartItems.map(_Data => {
      if (_Data.productId === CartId) {
        let _Data = this.cartItems.filter(_Data =>_Data.productId !== CartId);
        this.cartItems=_Data;
        this._AddToCartService.SetCartToLocalStorage(this.cartItems);
        this.cartTotal = 0;
        if (this.cartItems.length === 0) {
          this.cartItemsTotal = 0;
          this._AddToCartService.SetCartTotal(this.cartTotal);
        } else {
          this.cartItems.map(item => {
            this.cartTotal += (item.price * item.qty);
            this._AddToCartService.SetCartTotal(this.cartTotal);
          })
        }

        this.cartItemsTotal = 0;
        this.cartItems.map(_Data => {
          this.cartItemsTotal = this.cartItemsTotal + _Data.qty;
        })
        this._AddToCartService.SetNumberOfTotalCartItems(this.cartItemsTotal);
      } else {
        return null;
      }
    })
  }
  //Block Ends for Quantity Management Operations

}