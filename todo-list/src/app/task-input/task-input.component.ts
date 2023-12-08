import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.scss'
})
export class TaskInputComponent {
  @Output() taskAdded = new EventEmitter<string>();
  taskDescription: string = '';

  addTask(): void {
    if (this.taskDescription.trim()) {
      this.taskAdded.emit(this.taskDescription);
      this.taskDescription = '';
    }
  }
  updateTaskDescription(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.taskDescription = target.value;
  }

}
