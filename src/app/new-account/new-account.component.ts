import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from '../models/account.model';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');

  account:Account = new Account(0, 0, "PENDING", "CHECKING", this.activeId);
  
  constructor(private accountService:AccountService, private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  newAccount() {
    this.account = new Account(0, 0, "PENDING", this.account.type.toUpperCase(), this.activeId);
    console.log(this.account);
    this.accountService.createAccount(this.account).subscribe();
  }

}
