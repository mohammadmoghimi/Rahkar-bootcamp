import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { IDiaryrequest } from "../Typings/diary-request.model";
import { Observable, catchError } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class DiaryService {
  constructor(private http: HttpClient) {}

    submitDiary(diary: IDiaryrequest) :Observable<any> {
        return this.http.post('http://localhost:3000/api/diary/submit',diary).pipe(
          catchError(error => {
            console.log('errrrrror' , error );
            throw error           
          })
        ) ;
    }

    getAllDiaries():Observable<any> {
            return this.http.get<any[]>('http://localhost:3000/api/diary/get') ;
    }

    getDiaryById(id:number): Observable<any> {
        return this.http.get<any[]>(`http://localhost:3000/api/diary/get/${id}`);
      }

    editDiaryText(text: IDiaryrequest,id:number): Observable<any> {
        return this.http.put(`http://localhost:3000/api/diary/edit/${id}` , text);
      }

    deleteDiaryById(id:number): Observable<any> {
        return this.http.delete(`http://localhost:3000/api/diary/delete/${id}`);
      }

}
