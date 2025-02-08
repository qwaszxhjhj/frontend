import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { OrdermanageComponent } from './ordermanage/ordermanage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user/:uid', component: UserComponent }, 
  { path: 'products', component: ProductComponent }, 
  { path: 'order', component: OrderComponent }, 
  { path: 'usersmanagement', component: UsermanageComponent }, 
  { path: 'productsmanagement', component: ProductmanageComponent }, 
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'ordersmanagement', component: OrdermanageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
