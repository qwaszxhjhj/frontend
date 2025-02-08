import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Correct path to your HTML file
  styleUrls: ['./app.component.css'] // If you have CSS
})
export class AppComponent {
  title = 'My Angular App';

  uid: number | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.uid !== null) {
      this.router.navigate([`/user/${this.uid}`]); // Navigate using uid
    } else {
      console.log("User ID is required.");
    }
  }
}