import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() ChildValue:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.ChildValue);
  }

  ngOnChanges(){
    console.log(this.ChildValue);
  }

}
