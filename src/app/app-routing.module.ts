import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './MainPortal/products/products.component';
import { ViewCartComponent } from './MainPortal/view-cart/view-cart.component';
import { UserSignInComponent } from './ManagementPortal/UserManagement/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from './ManagementPortal/UserManagement/user-sign-up/user-sign-up.component';

const routes: Routes = [
  { path:'', component:ProductsComponent },
  { path:'product', component:ProductsComponent },
  { path:'view-cart', component:ViewCartComponent },
  { path:'user-sign-in', component:UserSignInComponent },
  { path:'user-sign-up', component:UserSignUpComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
