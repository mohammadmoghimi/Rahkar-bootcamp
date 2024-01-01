import { AuthService, AuthService } from './../auth.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

export const apiPrefixInterceptor: HttpInterceptorFn = (req , next) =>{
    let AuthService = inject(AuthService).getTokenFromLocalstorage()

    let request = req.clone({
        headers:req.headers.set('Authorization' ,'Bearer ${authService} ').set('Content-Type',`application/json`)
    })

    return next(request) ;
}