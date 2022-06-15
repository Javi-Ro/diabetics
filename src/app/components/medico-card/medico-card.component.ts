import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-card',
  templateUrl: './medico-card.component.html',
  styleUrls: ['./medico-card.component.scss'],
})
export class MedicoCardComponent implements OnInit {

  @Input() info: any;
  @Input() search: boolean;

  buttonClicked: boolean = false;

  constructor() { }

  ngOnInit() {}

  changeAnadir() {
    this.buttonClicked = !this.buttonClicked;
  }

}
