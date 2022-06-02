import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTasks().subscribe(res => {
      this.tasks = res;
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
