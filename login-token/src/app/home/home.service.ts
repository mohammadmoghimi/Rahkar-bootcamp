import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn:"root"
})
export class HomeService {

    constructor(private http:HttpClient , private authService:AuthService) {}

    getBooks(): Observable<Response> {
        return this.http.get<Response>("http://localhost:3000/api/book")
    
      }
}