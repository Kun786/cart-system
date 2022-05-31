import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataServiceService } from 'src/app/SharedPortal/Services/data-service.service';

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
    private _Router:RouterModule
  ) { }

  ngOnInit(): void {
    this.GetDataForMyComponent();
  }

  GetDataForMyComponent(){
    this.MyDataArray = this._DataService.GetData();
    console.log(this.MyDataArray);
  }

  GoToViewProduct(){
  }
}
