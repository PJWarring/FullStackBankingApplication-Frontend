import { Account } from './../models/account.model';
import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';
import { NewAccountComponent } from '../new-account/new-account.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  accounts:Account[] = [];

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');
  public user: User = new User(this.activeId,this.activeUsername,'','','','', this.activeRole);

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {  
  }

  createAccount():void {
    const modalRef = this.modalService.open(NewAccountComponent);
    modalRef.componentInstance.name = "newAccount";
  }
}
