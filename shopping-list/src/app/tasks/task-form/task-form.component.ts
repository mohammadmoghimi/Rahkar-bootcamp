import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ITaskRequest } from '../typings/task-request.model';
import { ITask } from '../typings/task.model';
import { subscribeOn } from 'rxjs';
import { TaskSubmitType } from '../enums/task-submit-type';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TaskItemComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  constructor(private fb:FormBuilder ,private taskService:TaskService){
    this.getTasks() ;
  }

  taskList: ITask[] = [
    {
      id: 1,
      title: "Take out the trash",
      isDone: false
    }
  ];

  taskForm = this.fb.group({
    title: ['', Validators.required]
  });

  submitType = TaskSubmitType.submit ;

  getTasks(){
    this.taskService.getTasks().subscribe({
      next:(data) =>{
        this.taskList = data.result ;
      } ,
      error:(error) =>{

      } ,
      complete:()=>{

      }
    })
  }
  selectedtaskid!:number  ;


  onSubmitTask() {
    console.log(this.taskForm.get("title")?.value);
    if(this.submitType == TaskSubmitType.submit){
this.taskService.createTask(this.taskForm.value as ITaskRequest)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });
    }
    if(this.submitType == TaskSubmitType.update){
this.taskService.editTitle(this.taskForm.value as ITaskRequest ,this.selectedtaskid)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{
        this.submitType = TaskSubmitType.submit ;
      }
    });
    }
    
    
    
    this.taskForm.reset()
  }

  onDeleteTask(taskId: number) {
    this.taskService.deleteTask(taskId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });  }

  onEditTask(taskId: number) {
    this.taskService.getTask(taskId).subscribe({
      next:(data) =>{
        this.taskForm.get("title")?.setValue(data.result[0].title) ;
        this.submitType = TaskSubmitType.update
        this.selectedtaskid = taskId ;
      } ,
      error:(error) =>{

      } ,
      complete:()=>{

      }
    })  }

  onDoneTask(taskId: number) {
    this.taskService.changeStatus(taskId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getTasks()
        
      } ,
      error:(error) =>{

      },
      complete:() =>{

      }
    });
  }
}
