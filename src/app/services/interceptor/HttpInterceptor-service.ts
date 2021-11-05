import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>> {
        
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    const httpReq = req.clone({headers});
    //return next.handle(httpReq);
    return next.handle(req)
        .pipe(catchError((err: any) => {
            console.log('is error =>', err);
            return new Observable<HttpEvent<any>>();
        }));
    }

}