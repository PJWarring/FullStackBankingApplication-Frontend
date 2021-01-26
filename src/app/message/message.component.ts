import { ClientMessage } from './../models/client-message.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('message') clientMessage:ClientMessage;

  constructor() { }

  ngOnInit(): void {
  }

  public setMessage(message:ClientMessage):void {
    this.clientMessage = message;
  }

}
