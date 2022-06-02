import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss'],
})
export class AlarmsComponent implements OnInit {

  toggleOvercomeRange: boolean;
  toggleLowRange: boolean;
  toggleTime: boolean;
  rangeOvercome: Number = 0;
  rangeLow: Number = 0;
  timeAlarm: string;

  constructor() { }

  ngOnInit() {}

  getTime() {
    return moment(this.timeAlarm).format('HH:mm');
  }
}
