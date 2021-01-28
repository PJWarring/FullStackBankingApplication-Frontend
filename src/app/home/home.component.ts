import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts:Account[] = [];
  setAccounts:Account[] = [];
  condition:boolean = false;
  condition2:boolean = false;

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');
  public user: User = new User(this.activeId,this.activeUsername,'','','','', this.activeRole);

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    this.getUserAccounts();
  }

  getUserAccounts(): void {
    this.accountService.getUserAccounts(this.user)
    .subscribe(accounts => {
      this.accounts = accounts;
      this.condition = this.checkCondition1(accounts);
      this.condition = this.checkCondition2(accounts);
      this.setAccounts = this.createSetAccounts(accounts);
    });
  }

  checkCondition1(accounts:Account[]):boolean {
    if(accounts === undefined || accounts.length == 0 && this.user.role == "USER") {
      return true;
    } else {
      return false;
    }
  }
  checkCondition2(accounts:Account[]):boolean {
    if(accounts === undefined || accounts.length == 0 && this.user.role != "USER") {
      return true;
    } else {
      return false;
    }
  }

  createSetAccounts(accounts:Account[]): Account[] {
    let setAccounts: Account[] = [];

    for(let x=0; x<accounts.length; x++){
      if(x==0){
        accounts[0].price = accounts[0].price*accounts[0].amount
        setAccounts.push(accounts[0]);
        continue;
      }
      for(let y=0;y<setAccounts.length;y++){
        if(accounts[x].stockString==setAccounts[y].stockString){
          setAccounts[y].price += accounts[x].price * accounts[x].amount;
          setAccounts[y].amount += accounts[x].amount;
          break;
        } else if(y==setAccounts.length-1){
          accounts[x].price=accounts[x].price * accounts[x].amount;
          setAccounts.push(accounts[x]);
          break;
        }
      }
    }
    return setAccounts;
  }

}
