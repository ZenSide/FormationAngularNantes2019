import {Post} from './post.model';

export class Comment {
        id: number;
        name:string;
        body: string;
        postId: number;
        post: Post;
}
