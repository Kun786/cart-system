import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/SharedPortal/Services/data-service.service';
import { MessengerService } from 'src/app/SharedPortal/Services/messenger.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  MyName="Hello Wolrd"
  MyDataArray:any = [];

  constructor(
    private _DataService:DataServiceService,
    private _Router:Router,
    private _MessengerService:MessengerService
  ) { }

  ngOnInit(): void {
    this.GetDataForMyComponent();
  }

  GetDataForMyComponent(){
    this.MyDataArray = this._DataService.GetData();
  }

  GoToViewProduct(Id:any){
    this._Router.navigate(['view-cart']);
    this._MessengerService.SendMessageWithData(Id);
  }
}

