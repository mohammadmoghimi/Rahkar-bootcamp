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
    return this.http.post(`http://localhost:3000/upload`, formData);
  }

  getAllPictures(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/fetchList`);
  }
}
