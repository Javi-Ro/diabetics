import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-see-task',
  templateUrl: './see-task.page.html',
  styleUrls: ['./see-task.page.scss'],
})
export class SeeTaskPage implements OnInit {

  id: any;
  task: any = {};

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getTasks().subscribe(res => {
      this.task = res[this.id];
    })
  }

  getTasks() {
    return this.http
    .get("assets/files/tasks.json")
    .pipe(
      map(((res: any) => {
        return res.tasks;
      }))
    )
  }

}
