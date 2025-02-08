import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { OrdermanageComponent } from './ordermanage/ordermanage.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    OrderComponent,
    LoginComponent,
    ShoppingcartComponent,
    UsermanageComponent,
    ProductmanageComponent,
    OrdermanageComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
