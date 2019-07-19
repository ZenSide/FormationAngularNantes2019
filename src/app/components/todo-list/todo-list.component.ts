import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodosService } from 'src/app/services/todos.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  headers: string[] = [
    "nom de la tâche",
    "assigné à"
  ];

  newTodo: Todo = new Todo();

  selectedTodoId: number = null;

  userId: number;

  users: User[];
  todoList: Todo[];

  constructor(private todosService: TodosService,
    private usersService: UsersService,
    private connectionService: ConnectionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.params.userId;

    this.usersService.getUsers().subscribe(users => this.users = users);

    this.todosService.getTodos().subscribe(todos => {
      this.todoList = todos;
      if (this.userId)
        this.todoList = this.todoList.filter(t => t.userId == this.userId);
    });
  }

  get connected() {
    return this.connectionService.isConnected();
  }

  complete(todo: Todo) {
    if (!this.connectionService.isConnected())
      return;
    todo.completed = !todo.completed;
  }

  select(todo: Todo) {
    this.selectedTodoId = todo.id;
  }

  deselect(event) {
    if (event.target.classList.contains('title'))
      return;
    this.selectedTodoId = null;
  }

  rowClicked(todo, event) {
    if (this.isSelected(todo)) event.stopPropagation()
  }

  isSelected(todo: Todo) {
    return this.selectedTodoId == todo.id;
  }

  ngTaskLeft() {
    return this.todosService.nbTaskLeft();
  }

  addTodo(form: NgForm) {
    if (form.invalid)
      return;
    if (this.todosService.exists(this.newTodo)) {
      form.controls.title.setErrors({ exists: true });
      return;
    }
    this.todosService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  compareUsers(user1: User, user2: User) {
    return user1 != null && user2 != null && user1.id == user2.id;
  }

}
