import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpRequest,HttpHeaders} from '@angular/common/http';
import { ApiEndpoint } from '../api/Iapi';
import { EndPoint, apiEndPoint } from '../api/api.value';

import { Post } from './post'

@Injectable()
export class PostService {
  apiEndpoint : string;
  token : string;
  constructor(private _http: HttpClient, @Inject(EndPoint) endPoint: ApiEndpoint) {
    this.apiEndpoint = endPoint.endPoint;
    this.token = endPoint.token;
   }
  getPosts(){
    return this._http.get<Post[]>(this.apiEndpoint+ 'posts'); //{headers:new HttpHeaders().set('token',this.token)}
  }

  addPost(post : Post){
  return this._http.post(this.apiEndpoint+ 'posts',post);
  }

  getPostData(){
    let req = new HttpRequest("GET",this.apiEndpoint+ 'posts',{reportProgress:true});
    return this._http.request(req);
  }

}
