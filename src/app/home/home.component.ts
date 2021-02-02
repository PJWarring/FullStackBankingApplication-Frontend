import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts:Account[] = [];
  condition:boolean = false;

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');
  public user: User = new User(this.activeId,this.activeUsername,'','','','', this.activeRole);

  constructor(private accountService:AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getUserAccounts();
  }

  getUserAccounts(): void {
    this.accountService.getUserAccounts(this.user)
    .subscribe(accounts => {
      console.log(accounts);
      this.accounts = accounts;
      this.condition = this.checkCondition1(accounts);
    });
  }

  checkCondition1(accounts:Account[]):boolean {
    if(accounts === undefined || accounts.length == 0) {
      return true;
    } else {
      return false;
    }
  }

}
