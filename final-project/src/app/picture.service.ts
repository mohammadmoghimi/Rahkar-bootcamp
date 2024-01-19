import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http :HttpClient) { }

  uploadPicture(description:string , file : File): Observable<any> {
    const formData = new FormData() ;
    formData.append('description', description);
    formData.append('image', file);
    return this.http.post(`http://localhost:4000/api/upload`, formData);
  }

  getAllPictures(query?:string): Observable<any[]> {

    if(query) {
      return this.http.get<any[]>(`http://localhost:4000/api/list?query=${query}`)
    }
    else
     return this.http.get<any[]>(`http://localhost:4000/api/list`);
  }
}
