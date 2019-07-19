import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  userId:number;

  constructor(private postsService:PostsService, private activatedRoute:ActivatedRoute) { }

  posts:Post[];

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.postsService.getPosts().subscribe(posts=>{
      this.posts = this.userId ? posts.filter(p=>p.userId=this.userId) : posts;
    })
  }

}
