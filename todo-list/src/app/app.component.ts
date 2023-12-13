import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { Task } from './task.model';
import { FormsModule } from '@angular/forms';
import { KholooseNiatTodolistComponent } from './kholoose-niat-todolist/kholoose-niat-todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet ,
     TaskInputComponent , TaskListComponent , KholooseNiatTodolistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // tasks: Task[] = [];

  // onTaskAdded(description: string): void {
  //   const task: Task = {
  //     id: Date.now(),
  //     description,
  //     done: false,
  //   };
  //   this.tasks.push(task);
  // }

  // onRemoveTask(id: number): void {
  //   this.tasks = this.tasks.filter((task) => task.id !== id);
  // }

  // onToggleTaskDone(id: number): void {
  //   const task = this.tasks.find((t) => t.id === id);
  //   if (task) {
  //     task.done = !task.done;
  //   }
  // }

  
}
