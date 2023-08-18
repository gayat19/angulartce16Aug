import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CartService } from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from './services/news.service';
import { NewsDetailsComponent } from './news-details/news-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    NewsComponent,
    NewsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CartService,NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
