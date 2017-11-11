import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PostService } from '../service/post/post.service';

import { Post } from '../service/post/post'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService],
})
export class PostComponent implements OnInit {
  totalData: number;
  userData: Post[];
  post = new Post();
  constructor(private _postService: PostService) { }

  ngOnInit() {
    // this._postService.getPosts().subscribe((data) =>this.userData=data,(err)=>console.log(err));
    this._postService.getPostData().subscribe(
      (event) => {
        if (event.type === HttpEventType.DownloadProgress) {
            let totalData = event.total == undefined ? event.loaded : event.total;
          this.totalData = Math.round(100 * event.loaded / totalData);
          console.log(this.totalData);
//          console.log(typeof event.loaded === 'number');
//          console.log(typeof event.total === 'number');
//          console.log(event.loaded);
//          console.log(event.total);
        }
        if (event instanceof HttpResponse) {
          console.log(event.body);
        }
      },
      (err) => {
        console.log(err);
      }

    );
  }

  addPost() {
    this._postService.addPost(this.post).subscribe((data) => console.log(data), (err) => console.log(err));
    this.post = new Post();
  }

}
