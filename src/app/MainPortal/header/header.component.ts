import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  CartIncrement:any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  IncrementCartValue(){
    this.CartIncrement++;
  }
}
