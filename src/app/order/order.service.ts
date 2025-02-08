import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from './order';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    getOrders() {
      throw new Error('Method not implemented.');
    }
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getOrder(orderId: number): Observable<Order> {
        return this.http.get<Order>(`${this.apiServerUrl}/orders/find/${orderId}`);
    }

    public createOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(`${this.apiServerUrl}/orders/createOrder`, order);
    }

    public updateOrder(orderId: number, order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiServerUrl}/orders/updateOrder/${order}`, order);
    }

    public deleteOrder(orderId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/orders/deleteOrder/${orderId}`);
    }
}