import {User} from './user.model';

export class Post {
        id: number;
        title: string;
        body: string;
        userId?: number;
        user?: User;
}
