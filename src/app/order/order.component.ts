import { Component, OnInit } from '@angular/core';
import { Order } from '../Entity/order';
import { OrderService } from '../Service/order.service'; 
import { HttpErrorResponse } from '@angular/common/http';
import { OrderProduct } from '../Entity/orderproduct';
import { User } from '../Entity/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: Order | undefined;
  public orders: Order [] = [];
  public orderId: number | null = null;
  public orderProduct: OrderProduct | undefined;
  public orderProducts : OrderProduct[] = [];
  public user: User | undefined;

  constructor(private orderService: OrderService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
    if (this.user) { // Check if orderId is NOT null
        this.orderService.getOrders(this.user.uid).subscribe(
            (orders: Order []) => { 
                this.orders = orders; 
                console.log('Received order:', this.order); 
            },
            (error: HttpErrorResponse) => { 
                console.error('Error fetching order:', error); 
            }
        );
    }
  }
}