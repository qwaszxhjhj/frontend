import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Order } from '../Entity/order';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getOrders(uid: number): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiServerUrl}/orders/find/${uid}`);
    }

    public getAllOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(`${this.apiServerUrl}/orders/all`);
    }

    public createOrder(uid: number): Observable<Order> {
        return this.http.post<Order>(`${this.apiServerUrl}/orders/createOrder/${uid}`, uid);
    }

    public updateOrder(orderId: number, order: Order): Observable<Order> {
        return this.http.put<Order>(`${this.apiServerUrl}/orders/updateOrder/${order}`, order);
    }

    public deleteOrder(orderId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/orders/deleteOrder/${orderId}`);
    }
}