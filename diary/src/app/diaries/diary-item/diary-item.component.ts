import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IDiary } from '../../Typings/diary.model';

@Component({
  selector: 'app-diary-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diary-item.component.html',
  styleUrl: './diary-item.component.scss'
})
export class DiaryItemComponent {
  @Input() diary!:IDiary ;
  @Output() edited = new EventEmitter() ;
  @Output() deleted = new EventEmitter() ;
}
