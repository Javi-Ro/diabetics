import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { PublicationCardComponent } from '../publication-card/publication-card.component';

@Component({
  selector: 'app-publication-comments',
  templateUrl: './publication-comments.component.html',
  styleUrls: ['./publication-comments.component.scss'],
})
export class PublicationCommentsComponent implements OnInit {
  
  id: any;
  post: any = {};

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPosts().subscribe(res => {
      this.post = res[this.id];
      console.log(this.post);
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
