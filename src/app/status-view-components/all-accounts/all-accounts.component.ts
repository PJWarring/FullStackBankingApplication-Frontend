import { REFRESH_PAGE_MESSAGE } from './../../utils/client-message-util';
import { Account } from 'src/app/models/account.model';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepositComponent } from 'src/app/deposit/deposit.component';
import { ClientMessage } from 'src/app/models/client-message.model';
import { User } from 'src/app/models/user.model';
import { AccountService } from 'src/app/services/account.service';
import { TransferComponent } from 'src/app/transfer/transfer.component';
import { WithdrawComponent } from 'src/app/withdraw/withdraw.component';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {

  accounts:Account[] = [];
  clientMessage:ClientMessage;
  noAccountCondition:boolean = false;
  isManagerCondition:boolean = false;
  isAdminCondition:boolean = false;

  selectedStatus:string = "all";

  refreshPageMessage:ClientMessage = REFRESH_PAGE_MESSAGE;

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');
  public user: User = new User(this.activeId,this.activeUsername,'','','','', this.activeRole);

  constructor(private accountService:AccountService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.activeRole == "USER") {
      this.getUserAccounts();
    } else {
      if (this.activeRole == "MANAGER") this.isManagerCondition = true;
      else if (this.activeRole == "ADMIN") this.isAdminCondition = true;
      this.getAdminAccounts();
    }    
  }

  getUserAccounts(): void {
    this.accountService.getUserAccounts(this.user)
    .subscribe(accounts => {
      this.accounts = accounts;
      this.noAccountCondition = this.checkNoAccountCondition(accounts);
    });
  }

  getAdminAccounts(): void {
    this.accountService.getAdminAccounts().subscribe(accounts => {
      this.accounts = accounts;
      this.noAccountCondition = this.checkNoAccountCondition(accounts);
    })
  }

  updateStatus(account:Account, new_status:string):void {
    account.status = new_status;
    this.accountService.updateAccount(account).subscribe(new_account => {
      account = new_account;
    })
  }

  setRefreshMessage():void {
    this.clientMessage = this.refreshPageMessage;
  }

  newDeposit(accountId:number):void {
    const modalRef = this.modalService.open(DepositComponent);
    modalRef.componentInstance.name = 'NewDeposit';
    modalRef.componentInstance.accountid = accountId;
    this.setRefreshMessage();
  }

  newWithdraw(accountId:number):void {
    const modalRef = this.modalService.open(WithdrawComponent);
    modalRef.componentInstance.name = 'NewWithdraw';
    modalRef.componentInstance.accountid = accountId;
    this.setRefreshMessage();
  }

  newTransfer(accountId:number):void {
    const modalRef = this.modalService.open(TransferComponent);
    modalRef.componentInstance.name = "newTransfer";
    modalRef.componentInstance.accountid = accountId;
    this.setRefreshMessage();
  }

  checkNoAccountCondition(accounts:Account[]):boolean {
    if(accounts === undefined || accounts.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
