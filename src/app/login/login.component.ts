import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Entity/user';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid: number | null = null;

  createdUser: User = {
    uid: 0,
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    shoppingCartId: 0, // or an empty ShoppingCart object
    orders: [],
  };

  private returnedUser: User | null | undefined;
  showUidPopup: boolean = false; // Flag to control popup visibility
  popupUid: number | null = null; // Store the UID to display in the popup

  
  constructor(
    private userService: UserService,
    private router: Router
  ) {}
  
  onSubmit() {
    if (this.uid !== null) {
      this.router.navigate([`/user/${this.uid}`]); // Navigate using uid
    } else {
      console.log("User ID is required.");
    }
  }

  ngOnInit(): void {
  }
  
  public createUser() {
    this.userService.createUser(this.createdUser).subscribe(
        (createdUser: User) => {
            console.log('User created successfully:', createdUser);
            this.returnedUser = createdUser; // Assign the createdUser to returnedUser

            // Display the popup
            this.showUidPopup = true;
            this.popupUid = this.returnedUser.uid; // Set the UID for the popup

            // Now you can use this.returnedUser (it will have the uid)
            console.log("Returned User Name:", this.returnedUser.name); // Example

            this.router.navigate([`/user/${this.returnedUser.uid}`]); // Navigate using returnedUser.uid

        },
        (error) => {
            console.error('Error creating user:', error);
            // Handle error appropriately
            this.returnedUser = null; // Reset returnedUser on error (optional)
        }
    );
  }

}
