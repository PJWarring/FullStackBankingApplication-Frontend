import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.userService.logoutUser();
  }

}
