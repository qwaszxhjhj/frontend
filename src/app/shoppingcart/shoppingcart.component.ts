import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../Service/shoppingcart.service';
import { User } from '../Entity/user';
import { UserService } from '../Service/user.service';
import { OrderProduct } from '../Entity/orderproduct';
import { Order } from '../Entity/order';
import { OrderService } from '../Service/order.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  public orderProduct: OrderProduct | undefined;
    public orderProducts : OrderProduct[] = [];
    user: User | undefined;
    order: Order | undefined;

  constructor(private shoppingCartService: ShoppingCartService, private userService: UserService
    , private orderService: OrderService) { }



  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  
    if (this.user) {
      this.shoppingCartService.getOrderProducts(this.user.uid).subscribe(
        (orderProducts: OrderProduct[]) => { 
          this.orderProducts = orderProducts; 
          if (this.orderProducts && this.orderProducts.length > 0) {
            this.orderProduct = this.orderProducts[0]; 
          }
        },
        (error: any) => { 
          console.error("Error fetching order products:", error);
        }
      );
    }
    console.log(this.orderProducts);
  }


  deleteProductFromCart(orderProductId: number) {
    if(this.user)
    this.shoppingCartService.deleteOrderProduct(orderProductId, this.user.uid).subscribe(() => {
      // Update the orderProducts array after successful deletion
      this.orderProducts = this.orderProducts.filter(product => product.orderProductId !== orderProductId); 
    });
  }


  createOrder() {
    if(this.user) {
      this.orderService.createOrder(this.user.uid).subscribe(
        (order: Order) => { 
          // Handle successful order creation 
          console.log('Order created successfully:', order);
          // Optionally: Redirect the user to an order confirmation page
          // Example: 
          // this.router.navigate(['/order-confirmation', order.orderId]); 
        },
        (error: any) => { 
          // Handle error during order creation
          console.error('Error creating order:', error);
        }
      );
    }
  }

  
}
