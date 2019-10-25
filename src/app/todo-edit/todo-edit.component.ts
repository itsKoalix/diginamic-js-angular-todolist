import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list/todo-list.service';
import { TodoModel } from '../todo-list/todo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  todo : TodoModel;

  constructor(private todolistService: TodoListService, private router : Router, private activatedRoute : ActivatedRoute) {  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id == null){
      this.todo = new TodoModel(0, '');
    } else {
      this.todo = this.todolistService.get(parseInt((id)));
    }
  }

  addToDo(){
    if(this.todo.id == 0){
      this.todo.id = this.todolistService.getNewId();
      this.todolistService.add(this.todo);
    } else {
      this.todolistService.edit(this.todo);
    }
    this.router.navigate(['list']);
  }
}
