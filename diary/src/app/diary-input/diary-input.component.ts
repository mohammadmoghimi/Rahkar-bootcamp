import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diary-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './diary-input.component.html',
  styleUrl: './diary-input.component.scss'
})
export class DiaryInputComponent {

  http = inject(HttpClient) ;
    diaryText: string = '';

 submitDiary() {
    if (this.diaryText) {
      this.http.post<any>('http://localhost:3000/api/diaries', { text: this.diaryText }).subscribe(
        (response)=>{
          console.log('Diary submitted successfully with ID:', response.id);
        },
      );
    }
  }

}
