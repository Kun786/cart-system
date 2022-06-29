import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDefaultComponent } from './admin-default.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DashBoardComponent } from '../AdminComponents/dash-board/dash-board.component';
import { UserListComponent } from '../AdminComponents/user-list/user-list.component';
import { CreateProductComponent } from '../AdminComponents/create-product/create-product.component';



@NgModule({
  declarations: [
    AdminDefaultComponent,
    DashBoardComponent,
    UserListComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminDefaultModule { }
