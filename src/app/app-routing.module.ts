import { ChildComponent } from './MainPortal/child/child.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDefaultComponent } from './AdminPortal/admin-default/admin-default.component';
import { CreateProductComponent } from './AdminPortal/AdminComponents/create-product/create-product.component';
import { DashBoardComponent } from './AdminPortal/AdminComponents/dash-board/dash-board.component';
import { UserListComponent } from './AdminPortal/AdminComponents/user-list/user-list.component';
import { AngularConceptsComponent } from './MainPortal/angular-concepts/angular-concepts.component';
import { ParentComponent } from './MainPortal/parent/parent.component';
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
  { path:'angular-components', component:AngularConceptsComponent },
  { path:'parent', component:ParentComponent },
  { path:'child', component:ChildComponent },

  {
    path:'admin-portal',component:AdminDefaultComponent,
    children: [
      {path:'', component:DashBoardComponent},
      {path:'dashboard',component:DashBoardComponent},
      {path:'user-list',component:UserListComponent},
      {path:'create-product',component:CreateProductComponent}

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
