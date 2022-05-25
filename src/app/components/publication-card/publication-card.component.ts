import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication-card',
  templateUrl: './publication-card.component.html',
  styleUrls: ['./publication-card.component.scss'],
})
export class PublicationCardComponent implements OnInit {

  @Input() username: String;
  @Input() title: String;
  @Input() text: String;
  @Input() image: String;
  @Input() comments: String;
  

  constructor() { }

  ngOnInit() {}

}
