import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: AppComponent}, // Default route (optional, but often useful)
  { path: 'user/:uid', component: UserComponent }, // Route with a parameter :uid
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
