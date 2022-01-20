import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";

@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor {

  jwtToken: String = "";

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.jwtToken !== "") {
      request = request.clone({setHeaders: {Authorization: `Bearer ${this.jwtToken}` }});
    }

    return next.handle(request)
      .pipe(
        tap( (evt: HttpEvent<any>) => {
          
          if (evt instanceof HttpResponse) {
            let bearerInfo : Array<String>;
            let headerAuthorization = evt.headers.get("Authorization");
            
            if (headerAuthorization != null ) {
              bearerInfo = headerAuthorization.split(/Bearer\s+(.*)$/i);
              if (bearerInfo.length > 1) this.jwtToken = bearerInfo[1];
            }

            console.log(this.jwtToken);
          }}
        )
      );

  }
}