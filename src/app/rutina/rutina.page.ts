import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  @ViewChild('alimentosChart') mediaChart;
  alimentosGraph : any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
  }

  generateAlimentosChart() {
    this.alimentosGraph = new Chart(this.mediaChart.nativeElement, {
      type: 'pie',
      data: {
        labels: [
          'Carbohidratos',
          'Proteinas',
          'Grasas',
          'Fibras'
        ],
        datasets: [{
          label: 'Gramos',
          data: [39, 5, 47, 7],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)'
          ]
        }]
      }
    });
  }

  ionViewDidEnter() {
    this.generateAlimentosChart();
  }

}
