import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public uid: number | null = null;
  public user: User | undefined;
  updatedUser: User = { 
    uid: 0, 
    name: '', 
    email: '', 
    password: '', 
    phoneNumber: '', 
    address: '' 
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

        console.log("User ID (Number):", this.uid); // Now this.uid is a number

        this.getUser(this.uid); // Pass `uid` to `getUser`
      }
    });
  }

  public getUser(uid : number): void {
    this.userService.getUser(uid).subscribe(
      (response : User) => {
        this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public updateUser() {
    if (this.uid) { 
      this.userService.updateUser(this.uid, this.updatedUser).subscribe(
        (updatedUser) => {
          // Handle successful update (e.g., display success message)
          console.log('User updated successfully:', updatedUser);
        },
        (error) => {
          // Handle error (e.g., display error message)
          console.error('Error updating user:', error);
        }
      );
    } else {
      // Handle the case where uid is null (e.g., display an error message)
      console.error('User ID is not valid');
    }
  }

}
