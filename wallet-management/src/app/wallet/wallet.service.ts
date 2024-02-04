import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor( private http : HttpClient) { }
  apiUrl = 'http://localhost:3000/api/wallet' ;

  addToWallet(userId: number, amount: number): Observable<any[]> {
    const token = localStorage.getItem('auth_token');
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,}),
    };

    return this.http.post<any[]>(`${this.apiUrl}/add-to-wallet`, { userId, amount }, httpOptions);
  }
}
