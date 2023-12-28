import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { ITask } from "./typings/task.model";
import { ITaskRequest } from "./typings/task-request.model";

@Injectable({
    providedIn:'root'

})

export class TaskService {
    constructor(private http:HttpClient) {}

  
    createTask(task: ITaskRequest): Observable<any> {
      return this.http.post('http://localhost:3000/api/task/add',task);
    }
    getTasks(): Observable<any> {
      return this.http.get('http://localhost:3000/api/task/get');
    }
    changeStatus(id:number): Observable<any> {
      return this.http.get(`http://localhost:3000/api/task/status/${id}`);
    }
    editTitle(data :ITaskRequest ,id:number): Observable<any> {
      return this.http.put(`http://localhost:3000/api/task/edit/${id}`,data);
    }
    getTask(id:number): Observable<any> {
      return this.http.get(`http://localhost:3000/api/task/get/${id}`);
    }
    deleteTask(id:number): Observable<any> {
      return this.http.delete(`http://localhost:3000/api/task/delete/${id}`);
    }
}