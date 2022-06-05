import { Component, OnInit } from '@angular/core';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';

@Component({
  selector: 'app-publication-publish',
  templateUrl: './publication-publish.component.html',
  styleUrls: ['./publication-publish.component.scss'],
  providers: [ImagePicker]
})
export class PublicationPublishComponent implements OnInit {

  images: any = [];
  options: any;

  constructor(private imagePicker: ImagePicker) { }

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

}
