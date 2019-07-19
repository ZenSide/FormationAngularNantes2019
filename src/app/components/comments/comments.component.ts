import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import {Comment} from '../../models/comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  comments:Comment[];

  constructor(private commentsService:CommentsService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    const postId = this.activatedRoute.snapshot.params.postId;
    this.commentsService.getPostComments(postId).subscribe(c=>this.comments=c);
  }

}
