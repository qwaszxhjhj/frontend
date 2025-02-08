import { Component, OnInit } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service'; 
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: Order | undefined;
  public orderId: number | null = null;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getOrder(this.orderId).subscribe(
      (order) => {
        this.order = order;
      },
      (error) => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  public getOrder(): void(){
      this.orderService.getOrder().subscribe(
        (response: Order[]) => {
          this.order = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
}