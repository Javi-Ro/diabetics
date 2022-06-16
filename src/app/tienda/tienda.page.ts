import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
})
export class TiendaPage implements OnInit {

  productos = [
    {
      titulo: "Dulces y chuches",
      description: "Te ofrecemos una amplia gama de Dulces y Chuches para diabéticos, para que tanto pequeños como mayores, puedan disfrutar de un dulce y saludable capricho al mismo tiempo que cuidan de su dieta y su diabetes.",
      img: "/assets/images/producto-1.jpeg"
    },
    {
      titulo: "Suplemento nutricional con fibra",
      description: "FontActiv diaBest Vainilla- Suplemento Nutricional con Fibra de Bajo Índice Glucémico para Adultos y Mayores - 400 gr",
      img: "/assets/images/producto-2.jpeg"
    },
    {
      titulo: "Estuche para medidor de glucosa",
      description: "Funda protectora para Freestyle Libre 1 y 2 medidor de azúcar en sangre de ... Brazalete protector sensor glucosa Freestyle Libre 2 LibreLink (Diabetes) ...",
      img: "/assets/images/producto-3.jpeg"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
