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
  @ViewChild('mediaChart') mediaChart;

  isDangerous: boolean = false;
  clicked: boolean = false;
  glucosa: Number = 107;
  clickedText: string = "No necesitas insulina";
  //Chart attributes
  labels: String[][] = [
    ['12AM', '3AM', '6AM', '9AM', '12PM', '3PM', '5PM', '8PM'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    ['1', '5', '9', '13', '17', '21', '24', '28', '31']
  ];
  data: Number[][] = [
    [152, 96, 63, 116, 197, 181, 140, 87],
    [155, 139, 177, 120, 77, 112, 79],
    [196, 153, 98, 151, 64, 174, 152, 184, 150]
  ]
  labelsSelected: String[] = this.labels[0];
  selectedNumbers: Number[] = this.data[0];
  selectedData: any = "0";
  graph: any;
  mediaGraph: any;

  constructor() {
    
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.generateChartGlucosa();
    this.generateMediaChart();
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

  changeSelectionChart() {
    this.labelsSelected = this.labels[this.selectedData];
    this.selectedNumbers = this.data[this.selectedData];
    this.graph.destroy();
    this.generateChartGlucosa();
  }

  generateChartGlucosa() {
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

  generateMediaChart() {
    this.mediaGraph = new Chart(this.mediaChart.nativeElement, {
      type: 'polarArea',
      data: {
        labels: [
          '12AM-8AM',
          '8AM-4PM',
          '4PM-12AM'
        ],
        datasets: [{
          label: 'Media glucosa',
          data: [110, 90, 150],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      }
    });
  }

}
