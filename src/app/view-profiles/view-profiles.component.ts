import { REFRESH_PAGE_MESSAGE } from './../utils/client-message-util';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientMessage } from 'src/app/models/client-message.model';
import { User } from 'src/app/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {
  profiles:User[] = [];
  clientMessage:ClientMessage;
  noProfilesCondition:boolean = false;
  isManagerCondition:boolean = false;
  isAdminCondition:boolean = false;

  refreshPageMessage:ClientMessage = REFRESH_PAGE_MESSAGE;

  public activeId:number = Number(sessionStorage.getItem('activeId'));
  public activeRole:string = sessionStorage.getItem('activeRole');
  public activeUsername:string = sessionStorage.getItem('activeUsername');
  public activeUser: User = new User(this.activeId,this.activeUsername,'','','','', this.activeRole);

  constructor(private userService:UserService, private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.activeRole == "MANAGER") this.isManagerCondition = true;
    else if (this.activeRole == "ADMIN") this.isAdminCondition = true;
    this.getAllProfiles()
  }

  getAllProfiles(): void {
    this.userService.getAllUsers()
    .subscribe(profiles => {
      this.profiles = profiles;
      this.noProfilesCondition = this.checkNoProfilesCondition(profiles);
    });
  }

  setRefreshMessage():void {
    this.clientMessage = this.refreshPageMessage;
  }

  checkNoProfilesCondition(profiles:User[]):boolean {
    if(profiles === undefined || profiles.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}
