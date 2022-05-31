import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './MainPortal/products/products.component';
import { ViewCartComponent } from './MainPortal/view-cart/view-cart.component';

const routes: Routes = [
  { path:'', component:ProductsComponent },
  { path:'product', component:ProductsComponent },
  { path:'view-cart', component:ViewCartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
