import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './user';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getUser(uid: number): Observable<User> {
        return this.http.get<User>(`${this.apiServerUrl}/users/find/${uid}`);
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