import { Component, OnInit } from '@angular/core';
import { User } from '../../SharedPortal/Models/UserModel';

@Component({
  selector: 'app-angular-concepts',
  templateUrl: './angular-concepts.component.html',
  styleUrls: ['./angular-concepts.component.css']
})
export class AngularConceptsComponent implements OnInit {

  AnyStupidValue:any;
  constructor() { }

  ngOnInit(): void {
  } 

  DataModel(){
    const SomeData:User={
      Name:'Hi',
      Id:1,
      Human:true
    }
    return SomeData
  }
}
