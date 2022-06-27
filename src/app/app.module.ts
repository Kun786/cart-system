import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './MainPortal/products/products.component';
import { HeaderComponent } from './MainPortal/header/header.component';
import { FooterComponent } from './MainPortal/footer/footer.component';
import { ViewCartComponent } from './MainPortal/view-cart/view-cart.component';
import { UserSignInComponent } from './ManagementPortal/UserManagement/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './ManagementPortal/UserManagement/user-sign-up/user-sign-up.component';
import { AdminSignInComponent } from './ManagementPortal/AdminManagement/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './ManagementPortal/AdminManagement/admin-sign-up/admin-sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ViewCartComponent,
    UserSignInComponent,
    UserSignUpComponent,
    AdminSignInComponent,
    AdminSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {maxOpened:1,
      autoDismiss:true,}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
