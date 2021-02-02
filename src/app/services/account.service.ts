import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SERVER_URL } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public currAccount:Observable<Account[]>;

  constructor(public http:HttpClient) { }

  public getUserAccounts(user:User):Observable<Account[]> {
    return this.currAccount = this.http.get<Account[]>(`${SERVER_URL}/account/view/user/${user.id}`).pipe(
      catchError(this.handleError<Account[]>('getAccountByUser', null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
