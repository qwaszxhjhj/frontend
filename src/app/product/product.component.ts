import { Component, OnInit } from '@angular/core';
import { Product } from '../Entity/product';
import { ProductService } from '../Service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ShoppingCartService } from '../Service/shoppingcart.service';
import { UserService } from '../Service/user.service';
import { User } from '../Entity/user';
import { OrderProduct } from '../Entity/orderproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productId: number | null = null;
  public product: Product | undefined;
  public orderProduct: OrderProduct | undefined;
  public products : Product[] = [];
  selectedQuantity: number = 1; 
  user: User | undefined;

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
        (response: Product[]) => { // Correctly typed as Product[]
            this.products = response; // Assign the array to this.products
            // Now you can access individual products:
            if (this.products && this.products.length > 0) {
                this.product = this.products[0]; // Assign the first product
                console.log(this.product.name); // Access properties of a Product object
            }
        },
        (error: any) => { // Correctly typed error parameter
            console.error("Error fetching products:", error); // Log the error
            // Consider displaying a user-friendly message or handling the error appropriately
        }
    );
    this.user = this.userService.getCurrentUser();
  }

  addProductToCart(productId: number, quantity: number){
    if (this.user) {
      this.shoppingCartService.addProductToCart(productId, quantity, this.user.uid)
    .subscribe(
        () => { // Use an empty function or omit the first argument
            console.log(productId);
            console.log(quantity);
            if(this.user)
            console.log(this.user.uid);
        },
        (error: any) => {
            console.error('Error adding product to cart:', error);
            // Handle the error appropriately 
        }
    );
  }
    
    
  }
  

}
