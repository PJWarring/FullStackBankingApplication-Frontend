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
  
  loginUser(user:User):Observable<ClientMessage> {
    return this.http.post<ClientMessage>(`${SERVER_URL}/login`, user).pipe(
      catchError(this.handleError<ClientMessage>('loginUser', null))
    )
  }

  registerUser(user: User): Observable<ClientMessage> {
    return this.http.post<ClientMessage>(`${SERVER_URL}/register`, user).pipe(
      catchError(this.handleError<ClientMessage>('registerUser', null))
    )
  }

  getUserByUsername(user: User): Observable<User> {
    return this.currUser = this.http.post<User>(`${SERVER_URL}/getUserByName`, user).pipe(
      catchError(this.handleError<User>('getUserByUsername', null))
    )
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${SERVER_URL}/getUsers`).pipe(
      catchError(this.handleError<User[]>('getUserByUsername', null))
    )
  } 

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
