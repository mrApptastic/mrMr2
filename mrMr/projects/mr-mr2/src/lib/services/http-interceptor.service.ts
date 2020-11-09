/* A shared service for intercepting http errors. */
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})

export class HttpInterceptorService implements HttpInterceptor {
  constructor() { }
  /* Global method for handling http errors. */
  handleError(error: HttpErrorResponse) {
   return throwError(error);
  }
    /* Global method for intercepting http errors. */
 intercept(req: HttpRequest<any>, next: HttpHandler):
 Observable<HttpEvent<any>> {
  return next.handle(req)
  .pipe(
   catchError(this.handleError)
  );
  }
 }
