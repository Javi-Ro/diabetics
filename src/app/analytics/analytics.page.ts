import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  @ViewChild('glucosaChart') glucosaChart;

  isDangerous: boolean = false;
  clicked: boolean = false;
  glucosa: Number = 107;
  clickedText: string = "No necesitas insulina";
  //Chart attributes
  labels: String[][] = [
    ['9:00', '11:00', '13:00', '15:00', '15:00', '17:00', '19:00', '21:00', '23:00'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['1', '5', '9', '13', '17', '21', '24', '28', '31']
  ];
  data: Number[][] = [
    [152, 96, 63, 116, 197, 181, 140, 87, 125],
    [155, 139, 177, 120, 77, 112, 79],
    [196, 153, 98, 151, 64, 174, 152, 184, 150]
  ]
  labelsSelected: String[] = this.labels[0];
  selectedNumbers: Number[] = this.data[0];
  graph: any;

  constructor() { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.graph = new Chart(this.glucosaChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labelsSelected,
        datasets: [{
          label: '',
          data: this.selectedNumbers,
          fill: true,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    });
  }

  toggleDangerous() {
    if(this.isDangerous) {
      this.glucosa = 180;
      this.clickedText = "Necesitas 50 mg/dl \nde insulina";
    }
    else{
      this.glucosa = 107;
        this.clickedText = "No necesitas \ninsulina";
    }
  }

  changeText() {
    if (!this.clicked) {
      document.getElementById('insulina-text').hidden = false;
      document.getElementById('glucosa-label').hidden = true; 
      this.clicked = true;
    }
    else{
      document.getElementById('insulina-text').hidden = true;
      document.getElementById('glucosa-label').hidden = false; 
      this.clicked = false;
    }
  }

}
