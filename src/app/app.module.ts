import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './MainPortal/products/products.component';
import { HeaderComponent } from './MainPortal/header/header.component';
import { FooterComponent } from './MainPortal/footer/footer.component';
import { ViewCartComponent } from './MainPortal/view-cart/view-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    ViewCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
