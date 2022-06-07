import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mis-medicos',
  templateUrl: './mis-medicos.page.html',
  styleUrls: ['./mis-medicos.page.scss'],
})
export class MisMedicosPage implements OnInit {

  medicos: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMedicos().subscribe(res => {
      this.medicos = res;
    })
  }

  getMedicos() {
    return this.http
    .get("assets/files/medicos.json")
    .pipe(
      map((res:any) => {
        return res.medicos
      })
    )
  }

}
