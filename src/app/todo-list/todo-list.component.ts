import { Component, OnInit } from '@angular/core';
import { Todos } from './todo.model';
import { TodoListService } from './todo-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'td-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todolist : Todos = [];

  constructor(private todolistService: TodoListService, private router : Router) { }

  ngOnInit() {
    this.todolist = this.todolistService.getAll();
  }

  goToEdit(id){
    this.router.navigate(['edit', id])
  }

  deleteTodo(id){
    this.todolistService.delete(id);
    this.todolist = this.todolistService.getAll();
  }
  
  switchIsDone(todo){
    this.todolistService.editIsDone(todo);
    this.todolist = this.todolistService.getAll();
  }
}
