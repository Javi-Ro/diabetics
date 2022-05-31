import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss'],
})
export class PublicationCardComponent implements OnInit {

  @Input() info: any;
  @Input() isComment: boolean;
  @Input() isUnique: boolean;
  

  constructor() { }

  ngOnInit() {
    console.log('hola');
  }

}
