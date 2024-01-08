import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DiaryService } from '../diary.service';
import { IDiary } from '../../Typings/diary.model';
import { DiarySubmitType } from '../enums/diary-submit-type';
import { IDiaryrequest } from '../../Typings/diary-request.model';
import { DiaryItemComponent } from '../diary-item/diary-item.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diary-form',
  standalone: true,
  imports: [DiaryItemComponent,ReactiveFormsModule,
     FormsModule , CommonModule],
  templateUrl: './diary-form.component.html',
  styleUrl: './diary-form.component.scss'
})
export class DiaryFormComponent {
  
  constructor(private fb:FormBuilder ,
    private router:Router ,private diaryService:DiaryService){
    this.getAllDiaries() ;
  }
  diaryList: IDiary[] = [
    {
      id:1 ,
      text:"blah" ,
    }
  ] ;

  diaryForm = this.fb.group({
    text: ['', Validators.required]
  });

  getAllDiaries(){
    this.diaryService.getAllDiaries().subscribe({
      next:(data) =>{
        this.diaryList = data.result ;
      } ,
      error:(error) =>{
      } ,
      complete:()=>{
      }
    })
  }
  submitType = DiarySubmitType.submit ;
  selectedDiaryId!:number  ;


  onSubmitDiary() {
    console.log(this.diaryForm.get("text")?.value);
    this.diaryService.submitDiary(this.diaryForm.value as IDiaryrequest)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getAllDiaries()
      } ,
      error:(error) =>{
      },
      complete:() =>{
      }
    });
        this.diaryForm.reset() ;
        this.router.navigateByUrl('item')
  }


  onDeleteDiary(diaryId: number) {
    this.diaryService.deleteDiaryById(diaryId)
    .subscribe({
      next:(data) => {
        console.log(data);
        this.getAllDiaries()
      } ,
      error:(error) =>{
      },
      complete:() =>{
      }
    });  
  }

  onEditDiary(diaryId: number) {
    this.diaryService.getDiaryById(diaryId).subscribe({
      next:(data) =>{
        this.diaryForm.get("text")?.setValue(data.result[0].title) ;
        this.submitType = DiarySubmitType.update ;
        this.selectedDiaryId = diaryId ;
      } ,
      error:(error) =>{
      } ,
      complete:()=>{
      }
    })
   }
}
