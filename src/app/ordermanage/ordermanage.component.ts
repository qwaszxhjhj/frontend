import { Component, OnInit } from '@angular/core';
import { Order } from '../Entity/order';
import { OrderProduct } from '../Entity/orderproduct';
import { User } from '../Entity/user';
import { OrderService } from '../Service/order.service';
import { UserService } from '../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ordermanage',
  templateUrl: './ordermanage.component.html',
  styleUrls: ['./ordermanage.component.css']
})
export class OrdermanageComponent implements OnInit {
  public order: Order | undefined;
  public orders: Order [] = [];
  public orderId: number | null = null;
  public orderProduct: OrderProduct | undefined;
  public orderProducts : OrderProduct[] = [];
  public user: User | undefined;

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
          this.orderService.getAllOrders().subscribe(
              (orders: Order []) => { 
                  this.orders = orders; 
                  console.log('Received order:', this.orders); 
              },
              (error: HttpErrorResponse) => { 
                  console.error('Error fetching order:', error); 
              }
          );
      
    }

    deleteOrder(orderId: number){
      this.orderService.deleteOrder(orderId).subscribe(
        () => {
          this.orders = this.orders.filter(order => order.orderId !== orderId); 
        },
        (error) => {
          console.error('Error deleting order:', error);
        }
      );
    }

}
