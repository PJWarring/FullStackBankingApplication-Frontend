import { AccountTransaction } from './../models/account-transaction.model';
import { AccountService } from './../services/account.service';
import { Account } from './../models/account.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accountid:number = 0;
  accountTransaction:AccountTransaction = new AccountTransaction();

  constructor(private accountService:AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  withdraw():void {
    this.accountTransaction = new AccountTransaction(this.accountid, -1, "WITHDRAW", this.accountTransaction.amount);
    this.accountService.performTransaction(this.accountTransaction).subscribe();
    this.modalService.dismissAll();
  }
}
