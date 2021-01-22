import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientMessage } from '../models/client-message.model';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clientMessage:ClientMessage;
  user:User = new User();

  constructor(private userService:UserService, private router:Router) {}
  
  ngOnInit(): void {
  }

  public loginUser() : void {
    this.userService.loginUser(this.user)
    .subscribe(data => {
        if(data.message=="LOGIN SUCCESSFUL") {
          this.router.navigateByUrl('/home');
          let activeUser = this.userService.getUserByUsername(this.user);
          sessionStorage.setItem('activeUsername', this.user.username);
          //store activeRole here in the session (requires getting this information from active username)
        } else {
          this.router.navigateByUrl('/login');
          this.clientMessage = new ClientMessage(data.message)
        }
      })
  }

}
