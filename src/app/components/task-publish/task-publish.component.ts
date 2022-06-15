import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-task-publish',
  templateUrl: './task-publish.component.html',
  styleUrls: ['./task-publish.component.scss'],
  providers: [ImagePicker]
})
export class TaskPublishComponent implements OnInit {

  images: any = ['ejemplo.jpg', 'azucar.png'];
  options: any;
  imagesOpened: boolean = false;

  constructor(private imagePicker: ImagePicker, private toastController:ToastController) { }

  ngOnInit() {}

  pickImage() {
    this.options = {
      width: 200,
      quality: 30,
      outputType: 1
    };

    this.imagePicker.getPictures(this.options).then((results) => {
      for(var i=0; i < results.length; i++) {
        this.images.push('data:image/jpeg;base64,' + results[i]);
      }
    },
    (error) => {
      alert(error);
    });
  }

  changeImages() {
    this.imagesOpened = !this.imagesOpened;
  }

  async openToast() {
    const toast = await this.toastController.create({
      message: 'Functionality not available',
      duration: 2000,
      position: "bottom",
      color: "light"
    });
    toast.present();
  }

}
