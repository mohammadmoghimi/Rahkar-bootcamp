import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  apiUrl = "http://localhost:3000/api/auth" ;
  tokenKey = 'auth_token'

  storeToken(token : string ):void {
    localStorage.setItem(this.tokenKey , token) ;
  }
  
  getToke():string | null {
    return localStorage.getItem(this.tokenKey)
  }

  clearToken():void {
    localStorage.removeItem(this.tokenKey)
  }
  
    login(mobile : string  , password : string ):Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/login` , {mobile , password})
  } 

    register(mobile : string , password : string):Observable<any[]> {
    return this.http.post<any[]>(`${this.apiUrl}/register`,{mobile , password})
  }
}
