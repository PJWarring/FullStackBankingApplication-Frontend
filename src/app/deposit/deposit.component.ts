import { AccountTransaction } from './../models/account-transaction.model';
import { AccountService } from './../services/account.service';
import { Account } from './../models/account.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  accountid:number = 0;
  accountTransaction:AccountTransaction = new AccountTransaction();

  constructor(private accountService:AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  deposit():void {
    this.accountTransaction = new AccountTransaction(-1, this.accountid, "DEPOSIT", this.accountTransaction.amount);
    this.accountService.performTransaction(this.accountTransaction).subscribe();
    this.modalService.dismissAll();
  }
}
