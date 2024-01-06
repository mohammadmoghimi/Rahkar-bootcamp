import {
    HttpErrorResponse,
    HttpEvent,
    HttpInterceptorFn,
    HttpResponse,
  } from '@angular/common/http';
  import { catchError, map, throwError } from 'rxjs';

  export const apiErrorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        console.log(error);

  
        switch (error.status) {
          case 400:
            errorMessage = `Errorrrr: ${error.error.message}`;
            break;
  
          case 401:
            errorMessage = 'مشکل احراز هویت';
                break;
  
          case 422:
            errorMessage = error.error.errors;
            return throwError(() => errorMessage);
  
          case 404:
            errorMessage = 'ارتباط با سرور برقرار نشد';
                break;
   default:
      errorMessage = 'خطای ناشناخته شده';      
    break;              
        }
  
        console.log(error);
        return throwError(() => errorMessage);
      }),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
  
        return event;
      })
    );
  };
  