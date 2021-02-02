import { ClientMessage } from './../models/client-message.model';
import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public activeId:number = Number(sessionStorage.getItem("activeId"));
  public activeUsername:string = sessionStorage.getItem("activeUsername");
  public activeRole:string = sessionStorage.getItem("activeRole");

  public userInfo:User = new User();

  public clientMessage:ClientMessage;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  public getUserData():void {
    this.userService.getUserById(new User(this.activeId)).subscribe(data => this.userInfo = data);
  }

  public updateUser() {
    this.userService.updateUser(this.userInfo).subscribe(data => this.clientMessage = new ClientMessage("User was updated."));
  }

}
