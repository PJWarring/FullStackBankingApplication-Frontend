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
  public user:User = new User();
  
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  public signupUser():void {
    this.router.navigateByUrl('/login');
  }

}
