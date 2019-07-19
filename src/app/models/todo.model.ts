import {User} from './user.model';

export class Todo {
        id: number;
        title: string;
        completed: boolean;
        userId?: number;
        user?: User;
} 
