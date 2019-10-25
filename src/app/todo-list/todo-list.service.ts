import { Injectable } from '@angular/core';
import { TodoModel } from './todo.model';
import { Todos } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todolist : Todos = [];

  constructor() { }

  getAll() : Todos {
    return this.todolist;
  }

  get(id: number): TodoModel {
    return this.todolist.reduce((result, i) => i.id == id ? i : result);
  }

  getNewId(){
    var maxId = 0;
    this.todolist.map(function(todo){
        if (todo.id > maxId) maxId = todo.id;    
    });
    return maxId + 1;
  }

  add(todo : TodoModel){
    this.todolist.push(todo);
  }

  edit(todo : TodoModel){
    if(this.get(todo.id) != null)
      this.get(todo.id).label = todo.label;
  }

  delete(id : number){
    this.todolist = this.todolist.filter(t => t.id != id);
  }
}
