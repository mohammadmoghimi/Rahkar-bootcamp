import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
    providedIn:"root"
})

export class TransactionsService {
http = inject(HttpClient)  

    getTransactionList(userId: number): Observable<any[]> {
      return this.http.get<any[]>(`http://localhost:3000/api/transaction/list?id=${userId}`);
    }
  
    addTransaction(userId: number, title: string, amount: number, type: string): Observable<any> {
      return this.http.post<any>(`http://localhost:3000/api/transaction`, { userId, title, amount, type });
    }
}