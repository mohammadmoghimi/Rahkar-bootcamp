import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { IDiary } from '../Typings/diary.model';

@Component({
  selector: 'app-diary-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diary-list.component.html',
  styleUrl: './diary-list.component.scss'
})
export class DiaryListComponent {
  diaries: IDiary[] = [
    {
      id:1 ,
      text :"fdg" ,
      isDeleted:false
    }
  ];
  http = inject(HttpClient)

  loadDiaries(){
    this.http.get<any[]>('http://localhost:3000/api/diaries').subscribe(
      (res) => {
        this.diaries = res;
      },
    );
  }

  deleteDiary(id:number){
    this.http.delete<any>(`http://localhost:3000/api/diaries/${id}`).subscribe(
      (res) => {
        this.loadDiaries();
      },
    );
  }
}
