import { SERVER_URL } from './../../environments/environment';
import { ClientMessage } from './../models/client-message.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public currUser:Observable<User>;

  constructor(private http:HttpClient) { }
  
  loginUser(user:User):Observable<User> {
    return this.http.post<User>(`${SERVER_URL}/login`, user).pipe(
      catchError(this.handleError<User>('loginUser', null)));
  }

  logoutUser():void {
    sessionStorage.clear();
  }

  registerUser(user: User): Observable<any> {
    return this.http.post<User>(`${SERVER_URL}/user/create`, user).pipe(
      catchError(this.handleError<any>('createUser', null))
    );
  }

  isValidUser(user:User):Observable<ClientMessage> {
    return this.http.post<User>(`${SERVER_URL}/user/verify`, user).pipe(
      catchError(this.handleError<any>('isValidUser', null))
    )
  }

  updateUser(user: User): Observable<ClientMessage> {
    return this.http.put<ClientMessage>(`${SERVER_URL}/user/update/${user.id}`, user).pipe(
      catchError(this.handleError<ClientMessage>('updateUser', null))
    );
  }

  getUserById(user: User): Observable<User> {
    return this.currUser = this.http.post<User>(`${SERVER_URL}/view/${user.id}`, user).pipe(
      catchError(this.handleError<User>('getUserById', null))
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${SERVER_URL}/view/all`).pipe(
      catchError(this.handleError<User[]>('getAllUsers', null))
    );
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
