import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {LoaderService} from "./loader.service";
import {finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(public loadservice:LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadservice.isLoading.next(true);
    return next.handle(req).pipe(
      finalize(
        () => {
          this.loadservice.isLoading.next(false);
        }
      )
    );
  }
}
