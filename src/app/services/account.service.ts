import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http:HttpClient) { }

  public getUserAccounts(user:User):void {
    //TODO: complete this method and change the return condition to reflect the fact
    //that this should return a list of all accounts visible to the user (the accounts the user
    //owns, or if they are a manager/admin then all accounts)
  }
}
