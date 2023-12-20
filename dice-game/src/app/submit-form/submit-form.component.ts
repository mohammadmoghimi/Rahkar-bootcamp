import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { response } from 'express';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-submit-form',
  standalone: true,
  imports: [HttpClientModule  ,  FormsModule,ReactiveFormsModule  ],
  template: `
  <form>
    <div>
        <input [(ngModel)]="username" placeholder="enter username">
        <button (click)="onClick()">submit</button>
    </div>
  </form>`,
  styleUrl: './submit-form.component.scss'
})
export class SubmitFormComponent {
  username:string = '' ;
  @Output() clickEvent = new EventEmitter<string> ;
onClick() {
  this.clickEvent.emit(this.username)
}
}
