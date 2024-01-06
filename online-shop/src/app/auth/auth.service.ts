import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn:"root"
})

export class AuthService {

    private readonly _authStorageToken:string = "authToken" ;
    isLogin : boolean = false ;

    constructor(private http : HttpClient , private router:Router) {}

    setTokenLocalStorage(token: string) {
        localStorage.setItem(this._authStorageToken,token)
        this.isLogin = true ;
    }
getTokenFromLocalStorage(){
    return localStorage.getItem(this._authStorageToken) as string ;
}

register(user:any) :Observable<Response> {
    return this.http.post<Response>("http://localhost:3000/api/auth/register",user)
}
login(data:any) :Observable<Response> {
    return this.http.post<Response>("http://localhost:3000/api/auth/login",data)
}

    removeTokenFromLocalStorage() {
        localStorage.removeItem(this._authStorageToken)
    }
    checkUserAuthenticate() {
        if (this.getTokenFromLocalStorage()){
            this.isLogin = true ;
        }
    }

    logOut() {
        this.removeTokenFromLocalStorage() ;
        this.isLogin = false ;
        this.router.navigateByUrl("auth/login") ;
    }
    


}