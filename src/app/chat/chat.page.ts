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
      text : "Hola buenos dias, digame que necesita hoy? Cualquier cosa no dude en preguntarme",
      from : true,
      createdAt : new Date().getTime()
    },
    {
      text : "Buenas, le queria comentar acerca de un problema que llevo teniendo con mi dieta los ultimos dias",
      from : false,
      createdAt : new Date().getTime()
    },
    {
      text : "Si claro! Pregunteme lo que haga falta, para eso estamos, para ayudar. Antes que nada me gustaria saber cual es su dieta actualmente y si es alergico a algun tipo de alimento y/o medicamento",
      from : true,
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
