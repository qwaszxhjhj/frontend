import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './Entity/user';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Correct path to your HTML file
  styleUrls: ['./app.component.css'] // If you have CSS
})
export class AppComponent {
  title = 'My Angular App';

  public currentUser: User | undefined;
  
  public showDefaultNav = true; // Flag to toggle nav bars


  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
  }

  userLoadAndNavigate() {
    this.currentUser = this.userService.getCurrentUser();
    if (this.currentUser) {
      console.log("User details:", this.currentUser);
      this.router.navigate(['/user', this.currentUser.uid]); // Navigate immediately
    } else {
        console.log("User not found or error occurred.");
        // Handle the error, maybe display a message
    }
  }

  productsNavigate() {
    this.router.navigate(['/products']); 
  }

  orderNavigate() {
    this.router.navigate(['/order']); 
  }

  toggleNav() {
    this.showDefaultNav = !this.showDefaultNav; // Toggle the flag
  }

  userManagementNavigate() {
    this.router.navigate(['/usersmanagement']); 
  }

  productManagementNavigate
  () {
    this.router.navigate(['/productsmanagement']); 
  }

  shoppingcartNavigate(){
    this.router.navigate(['/shoppingcart']); 
  }

  orderManagementNavigate(){
    this.router.navigate(['/ordersmanagement']); 
  }

}