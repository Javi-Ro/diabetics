import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post/post';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {

  posts: Post[] = [];

  constructor() { }

  ngOnInit() {
    this.posts.push(new Post(
      "@mariaa_",
      "Haz deporte",
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vulputate iaculis dis condimentum. Aptent netus hac purus euismod vitae primis maecenas montes, arcu pretium cras tellus posuere litora per, lobortis torquent interdum morbi tempus dignissim curae",
      "ejemplo.jpg",
      5
    ));
    this.posts.push(new Post(
      '@mariaa_',
      'Haz deporte',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vulputate iaculis dis condimentum. Aptent netus hac purus euismod vitae primis maecenas montes, arcu pretium cras tellus posuere litora per, lobortis torquent interdum morbi tempus dignissim curae',
      'deporte.png',
      20
    ));
    this.posts.push(new Post(
      '@mariaa_',
      'Haz deporte',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vulputate iaculis dis condimentum. Aptent netus hac purus euismod vitae primis maecenas montes, arcu pretium cras tellus posuere litora per, lobortis torquent interdum morbi tempus dignissim curae',
      'deporte.png',
      500
    ));
    this.posts.push(new Post(
      '@mariaa_',
      'Haz deporte',
      'Lorem ipsum dolor sit amet consectetur adipiscing elit, interdum vulputate iaculis dis condimentum. Aptent netus hac purus euismod vitae primis maecenas montes, arcu pretium cras tellus posuere litora per, lobortis torquent interdum morbi tempus dignissim curae',
      'deporte.png',
      1200000
    ));
  }

}
