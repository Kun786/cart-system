import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  UserRegisterForm: any | FormGroup;

  constructor(private FormGroup:FormGroup, private _FormBuilder:FormBuilder) {
    this.UserRegisterFromModel();
   }

  ngOnInit(): void {
  }

  UserRegisterFromModel() {
    this.UserRegisterForm = this._FormBuilder.group({
      Name: [''],
      Email: [''],
      Address: [''],
      Password: ['']
    })
  }

  SubmitUserForm(){
    console.log('form works')
  }
}
