import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InitialNavigation } from '@angular/router';
import { TodoService } from './todo.service';
import jwt_decode from "../../../../../node_modules/jwt-decode";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [ TodoService ]
})
export class TodoComponent implements OnInit{
  public todoList:Array<any>;
  public newTodoText:string = '';
  todo: any;
  token = localStorage.getItem('token');
  decoded = jwt_decode(this.token);
  userId = JSON.parse(JSON.stringify(this.decoded))._id;
  constructor( private _todoService:TodoService) {
    this.getAllTodos();
  }
  ngOnInit(): void {

    this.todo = new FormGroup({
      text: new FormControl(''),
      userOwner: new FormControl(this.userId),
    })

  }
  getAllTodos(){
    this._todoService.getAllTodos().subscribe((res :Array<any>)=>
    this.todoList  =res
    );
  }

  public  getNotDeleted() {
    return this.todoList.filter((item:any) => {
      return !item.deleted
    })
  }

  public addToDoItem($event) {
    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
      this.todo.patchValue({
          text: this.newTodoText
      });
      this._todoService.addTodo(this.todo.value).subscribe();
      this.newTodoText = '';
      this.getAllTodos();
    }
  }
  public deleteTodo(id){
    this._todoService.deleteTodo(id).subscribe();
    this.getAllTodos()
  }

} 