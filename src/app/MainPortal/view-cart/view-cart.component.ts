import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/SharedPortal/Services/data-service.service';
import { MessengerService } from 'src/app/SharedPortal/Services/messenger.service';
import { NonVolatileService } from 'src/app/SharedPortal/Services/non-volatile.service';

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
    return
    }
    this.FilteredArray = this.DataFromMyService.filter( (Result:any) =>{ return ( Result._id === this.Data ) });
  }

}
