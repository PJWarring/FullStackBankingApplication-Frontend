import { NewAccountComponent } from './../new-account/new-account.component';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');

  constructor(private modalService:NgbModal) { }

  ngOnInit():void {

  }

  createAccount():void {
    const modalRef = this.modalService.open(NewAccountComponent);
    modalRef.componentInstance.name = "newAccount";
  }

}
