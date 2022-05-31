import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.page.html',
  styleUrls: ['./publication-comments.page.scss'],
})
export class PublicationCommentsPage implements OnInit {

  id: any;
  post: any = {};
  comments: any = [];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPosts().subscribe(res => {
      this.post = res[this.id];
    });
    this.getComments().subscribe(res => {
      this.comments = res;
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

  getComments() {
    return this.http
    .get("assets/files/comments.json")
    .pipe(
      map((res:any) => {
        return res.comments
      })
    )
  }

}
