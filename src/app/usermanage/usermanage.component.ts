import { Component, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { User } from '../Entity/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usermanage',
  templateUrl: './usermanage.component.html',
  styleUrls: ['./usermanage.component.css']
})
export class UsermanageComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error: HttpErrorResponse) => { // Use HttpErrorResponse for better type safety
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(uid: number): void {
    this.userService.deleteUser(uid).subscribe(
      () => {
        // Remove the deleted user from the local array
        this.users = this.users.filter(user => user.uid !== uid); 

        // Refresh the component by navigating to the current route
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/usersmanagement']); 
        });
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching users:', error);
      }
    );

  }
}
