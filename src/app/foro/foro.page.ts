import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-foro',
  templateUrl: './foro.page.html',
  styleUrls: ['./foro.page.scss'],
})
export class ForoPage implements OnInit {

  posts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts().subscribe(res => {
      this.posts = res;
    })
  }

  getPosts() {
    return this.http
    .get("assets/files/posts.json")
    .pipe(
      map((res:any) => {
        return res.posts
      })
    )
  }

}
