import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Service/product.service';
import { Product } from '../Entity/product';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.css']
})
export class ProductmanageComponent {

  newProduct: Product = {
    productId: 0, 
    name: '', 
    description: '', 
    price: 0, 
    quantity: 0, 
    category: '',
    orderProducts: []
  };

  public product: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

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
  }

  createProduct() {
    this.productService.createProduct(this.newProduct).subscribe({
      next: (createdProduct: Product) => {
        console.log('Product created successfully:', createdProduct);
        // You can display the product ID here using createdProduct.productId 
        // or store it for later use
      },
      error: (error) => {
        console.error('Error creating product:', error);
        // Handle error appropriately (e.g., display error message to the user)
      }
    });
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        // Remove the deleted product from the local array
        this.products = this.products.filter(product => product.productId !== productId); 
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }
}