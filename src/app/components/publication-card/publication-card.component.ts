import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss'],
})
export class PublicationCardComponent implements OnInit {

  @Input() info: any;
  @Input() isComment: boolean;
  @Input() isUnique: boolean;
  
  like: boolean = false;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    
  }

  changeLike() {
    this.like = !this.like;
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Link copied to clipboard',
      duration: 2000,
      position: "bottom",
      color: "primary"
    });
    toast.present();
  }

  async reportPublication() {
    const toast = await this.toastController.create({
      message: 'Publication reported',
      duration: 2000,
      position: "bottom",
      color: "warning"
    });
    toast.present();
  }

}
