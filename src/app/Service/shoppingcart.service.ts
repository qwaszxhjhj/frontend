import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from '../Entity/product';
import { environment } from "src/environments/environment";
import { OrderProduct } from "../Entity/orderproduct";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public addProductToCart(productId: number, quantity: number, uid: number): Observable<void> {
        return this.http.post<void>(`${this.apiServerUrl}/shoppingcart/add/${productId}/${quantity}/${uid}`, null);
    }

    public getOrderProducts(uid: number): Observable<OrderProduct[]> {
        return this.http.get<OrderProduct[]>(`${this.apiServerUrl}/shoppingcart/orderproducts/${uid}`);
    }

    public deleteOrderProduct(orderProductId: number, uid: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/shoppingcart/orderproducts/delete/${orderProductId}/${uid}`);
    }
}