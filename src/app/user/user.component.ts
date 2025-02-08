import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../Entity/user';
import { UserService } from '../Service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public uid: number | null = null;
  public user: User | null = null;
  updatedUser: User = {
    uid: 0,
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    shoppingCartId: 0, // or an empty ShoppingCart object
    orders: [],
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const uidParam = params.get('uid'); // Get the uid parameter (it will be a string)

      if (uidParam) {
        this.uid = +uidParam; // Convert the string to a number using the unary + operator

        console.log("User ID (Number):", this.uid); 

        this.getUser(this.uid);
      }
    });
  }

  public getUser(uid: number): void {
    this.userService.getUser(uid).subscribe(
        (response: User | null) => {
            this.user = response; // Assign the response (can be null)

            if (this.user) { // Check if this.user is NOT null
                console.log("User details:", this.user);
            } else {
                console.log("User not found or error occurred.");
            }
        },
        (error: HttpErrorResponse) => {
            console.error("Error fetching user:", error);
            alert(error.message);
            this.user = null; // Set user to null on error
        }
    );
}

public updateUser() {
  if (this.uid && this.user) {
      this.updatedUser.uid = this.uid; // Make sure UID is set
      console.log(this.updatedUser);
      this.userService.updateUser(this.uid, this.updatedUser).subscribe(
          (updatedUser: User) => {
              console.log('User updated successfully:', updatedUser);
              this.user = updatedUser; // Update the displayed user with the returned data
              Object.assign(this.updatedUser, this.user); // Update the edit form with the new data
              alert("User updated successfully!"); // Or a nicer notification

          },
          (error: HttpErrorResponse) => {
              console.error('Error updating user:', error);
              alert(error.message);
          }
      );
  } else {
      console.error('User ID or user data is not valid');
  }
}

}
