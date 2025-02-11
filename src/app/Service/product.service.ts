import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from '../Entity/product';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getProduct(productId: number): Observable<Product> {
        return this.http.get<Product>(`${this.apiServerUrl}/products/find/${productId}`);
    }

    public getProductByIds(productIds: number[]): Observable<Product[]> {
        return this.http.get<Product[]>(`${this.apiServerUrl}/products/find/${productIds}`);
    }

    public getAllProducts(): Observable<Product[]> { // Correct return type: Observable<Product[]>
        return this.http.get<Product[]>(`${this.apiServerUrl}/products/all`); // Correctly typed get request
      }

    public createProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(`${this.apiServerUrl}/products/createProduct`, product);
    }

    public updateProduct(productId: number, product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.apiServerUrl}/products/updateProduct/${productId}`, product);
    }

    public deleteProduct(productId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/products/deleteProduct/${productId}`);
    }
}