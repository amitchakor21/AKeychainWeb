import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApprouterComponent } from './approuter/approuter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { ProductsComponent } from './home/products/products.component';
import { ProductDetailComponent } from './home/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApprouterComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    OrderComponent,
    LoginWithGoogleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
