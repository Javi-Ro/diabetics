import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  
  messages = [
    {
      text : "Hola",
      from : true,
      createdAt : new Date().getTime()
    },
    {
      text : "Hola",
      from : false,
      createdAt : new Date().getTime()
    }
  ]

  newMessage = ""

  @ViewChild(IonContent) content : IonContent

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messages.push({
      text: this.newMessage,
      from: false,
      createdAt: new Date().getTime()
    })

    setTimeout(() => {
      this.content.scrollToBottom(200)
    }, 100)

    this.newMessage = ""
  }

}
