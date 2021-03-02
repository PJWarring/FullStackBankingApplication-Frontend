import { AccountTransaction } from './../models/account-transaction.model';
import { Account } from './../models/account.model';
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

  public currAccounts:Observable<Account[]>;
  public currAccount:Observable<Account>;

  constructor(public http:HttpClient) { }

  public getUserAccounts(user:User):Observable<Account[]> {
    return this.currAccounts = this.http.get<Account[]>(`${SERVER_URL}/account/view/user/${user.id}`).pipe(
      catchError(this.handleError<Account[]>('getAccountByUser', null))
    );
  }

  public getAdminAccounts():Observable<Account[]> {
    return this.currAccounts = this.http.get<Account[]>(`${SERVER_URL}/account/view/all`).pipe(
      catchError(this.handleError<Account[]>('getAllAccounts', null))
    );
  }

  public getAccountById(accountid:number):Observable<Account> {
    return this.currAccount = this.http.get<Account>(`${SERVER_URL}/account/view/${accountid}`).pipe(
      catchError(this.handleError<Account>('getAccountById', null))
    );
  }

  public getAccountsByStatus(status:string):Observable<Account[]> {
    return this.currAccounts = this.http.get<Account[]>(`${SERVER_URL}/account/view/status/${status}`).pipe(
      catchError(this.handleError<Account[]>('getAccountByStatus', null))
    );
  }

  public performTransaction(accountTransaction:AccountTransaction):Observable<Account[]> {
    return this.currAccounts = this.http.post<AccountTransaction>(`${SERVER_URL}/account/performTransaction`, accountTransaction).pipe(
      catchError(this.handleError<any>('performTransaction', null))
    );
  }

  public createAccount(account:Account):Observable<any> {
    return this.http.post<Account>(`${SERVER_URL}/account/create`, account).pipe(
      catchError(this.handleError<any>('createAccount', null))
    );
  }

  public updateAccount(account:Account):Observable<Account> {
    return this.currAccount = this.http.put<Account>(`${SERVER_URL}/account/update/${account.id}`, account).pipe(
      catchError(this.handleError<Account>('updateAccount', null))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any):Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }
}
