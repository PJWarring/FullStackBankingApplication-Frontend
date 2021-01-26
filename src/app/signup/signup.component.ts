import { ClientMessage } from './../models/client-message.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public clientMessage:ClientMessage;
  public tempBool:boolean; //TODO: you have to click the button twice for it to work
  public user:User = new User();
  
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  public signupUser():void {
    if (this.isValidUser(this.user)) {
      this.userService.registerUser(this.user).subscribe();
      this.router.navigateByUrl('/login');
    }
  }

  public isValidUser(inputUser:User):boolean {
    if (inputUser.username != "" && inputUser.password != "" &&
      inputUser.firstname != "" && inputUser.lastname != "" &&
      inputUser.email != "") {
        if (this.userService.isValidUser(inputUser).subscribe(data => {
          this.clientMessage = data;if (this.clientMessage.message == "Valid fields")this.tempBool=true;})) {if (this.tempBool) return true;
        } else {
          this.clientMessage = new ClientMessage("Invalid username or email.");
          return false;
        }
      } else {
      this.clientMessage = new ClientMessage("All fields are required.");
      return false;
    }
  }
}
