import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mis-medicos',
  templateUrl: './mis-medicos.page.html',
  styleUrls: ['./mis-medicos.page.scss'],
})
export class MisMedicosPage implements OnInit {

  medicosVisibles: any = [];
  medicos: any = [];
  medicosBuscar: any = [];
  showSearch: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMedicos().subscribe(res => {
      this.medicosVisibles = res;
      this.medicos = res;
    });
    this.getMedicosBuscar().subscribe(res => {
      this.medicosBuscar = res;
    });
  }

  getMedicos() {
    return this.http
    .get("assets/files/mis-medicos.json")
    .pipe(
      map((res:any) => {
        return res.medicos
      })
    );
  }

  getMedicosBuscar() {
    return this.http
    .get("assets/files/medicos.json")
    .pipe(
      map((res:any) => {
        return res.medicos
      })
    );
  }

  toggleSearchView() {
    if(!this.showSearch) {
      this.medicosVisibles = this.medicosBuscar;
    }
    else{
      this.medicosVisibles = this.medicos;
    }
    this.showSearch = !this.showSearch;
  }

}
