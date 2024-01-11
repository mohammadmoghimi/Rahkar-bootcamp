import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";

@Injectable ({
    providedIn:"root"
})

export class WalletService {
    http = inject(HttpClient)   

    getWalletAmount(userId: number): Observable<number> {
        return this.http.get<number>(`http://localhost:3000/api/wallet/amount?id=${userId}`);
      }

}