import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from 'src/environments/environment';

@Injectable()
export class TodoService {
  usersUrl: string = environment.basUrl;

  constructor(private http: HttpClient) {
   
  }
  addTodo(data) {
    return this.http.post(this.usersUrl + "todos/todo/add/", data );
  }
  getTodo(id) {
    return this.http.get(this.usersUrl + "todos/todo/" + id,);
  }
  deleteTodo(id) {
    return this.http.delete(this.usersUrl + "todos/todo/delete/" + id, );
  }
  getAllTodos() {
    return this.http.get(this.usersUrl + "todos/getAllTodos");
  }

} 