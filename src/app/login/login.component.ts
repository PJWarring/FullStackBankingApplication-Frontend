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
        if(data.id != 0) {
          this.router.navigateByUrl('/home');
          // let activeUserObservable = this.userService.getUserById(this.user);
          // let activeUser:User;
          // activeUserObservable.subscribe(data => activeUser = data);
          sessionStorage.setItem('activeId', data.id.toString());
          sessionStorage.setItem('activeUsername', data.username);
          sessionStorage.setItem('activeRole', data.role);
        } else {
          this.router.navigateByUrl('/login');
          this.clientMessage = new ClientMessage("Login Was Unsuccessful")
        }
      })
  }

}
