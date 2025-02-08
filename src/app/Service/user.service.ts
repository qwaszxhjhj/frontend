import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from '../Entity/user';
import { environment } from "src/environments/environment";
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;
    private currentUser: User | undefined;
    private users: User[] | undefined;

    constructor(private http: HttpClient) {}

    public getUser(uid: number): Observable<User | null> { // Correct return type
        return this.http.get<User>(`${this.apiServerUrl}/users/find/${uid}`).pipe(
            tap((user: User) => this.currentUser = user),
            catchError((error: any) => { // Type the error parameter (optional but good practice)
                console.error("Error fetching user:", error);
                return of(null); // Return null on error
            })
        );
    }

    public getAllUsers(): Observable<User[]> { 
        return this.http.get<User[]>(`${this.apiServerUrl}/users/all`).pipe(
          tap((users: User[]) => this.users = users), // Store all users in the service
          catchError((error: any) => { 
            console.error("Error fetching users:", error);
            return of([]); // Return an empty array on error
          })
        );
      }

    public getCurrentUser(): User | undefined { // Method to access the current user
        return this.currentUser;
    }

    public createUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/users/createUser`, user);
    }

    public updateUser(uid: number, user: User): Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/users/updateUser/${uid}`, user);
    }

    public deleteUser(uid: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/users/deleteUser/${uid}`);
    }
}