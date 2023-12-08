import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() removeTask = new EventEmitter<number>();
  @Output() toggleTaskDone = new EventEmitter<number>();

  onRemoveTask(id: number): void {
    this.removeTask.emit(id);
  }

  onToggleTaskDone(id: number): void {
    this.toggleTaskDone.emit(id);
  }

}
