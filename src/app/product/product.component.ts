import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productId: number | null = null;
  public product: Product | undefined;
  public products : Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts;
  }

  public getProducts(): void(){
    this.productService.getAllProducts().subscribe(
      (response: Product[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
