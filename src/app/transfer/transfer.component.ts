import { ClientMessage } from './../models/client-message.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { AccountTransaction } from '../models/account-transaction.model';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  accountid:number = 0;
  clientMessage:ClientMessage;
  accountTransaction:AccountTransaction = new AccountTransaction();

  constructor(private accountService:AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  transfer():void {
    let contBool:boolean;
    contBool = this.accountTransaction.destId != this.accountid;
    if (contBool) {
      this.accountTransaction = new AccountTransaction(this.accountid, this.accountTransaction.destId, "TRANSFER", this.accountTransaction.amount);
      this.accountService.performTransaction(this.accountTransaction).subscribe();
      this.modalService.dismissAll();
    } else {
      this.clientMessage = new ClientMessage("You can't transfer from an account to the same account.");
    }
  }

}
