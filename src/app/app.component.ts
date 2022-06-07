import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Foro', url: '/folder/Foro', icon: 'globe' },
    { title: 'Analytics', url: '/folder/Analytics', icon: 'analytics' },
    { title: 'Tareas', url: '/folder/Tareas', icon: 'add-circle' },
    { title: 'Mis médicos', url: '/folder/Mis-medicos', icon: 'medkit' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
