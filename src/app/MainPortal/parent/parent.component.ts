import { Product } from './../../SharedPortal/Models/HumanBeing';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ParentValue = "";
  constructor() { }

  ngOnInit(): void {
  }

  PrintProduct(){
   let ProductCard:Product = {
    _Id:76,
    Name:'hjagsdhas',
    Quantity:76
   }

   8+'hello'

  }
}
