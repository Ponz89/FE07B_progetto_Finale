import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyHttpInterceptorInterceptor implements HttpInterceptor {
  tenantID = 'fe_0721b';
  bearerToken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NjgzNTE2OSwiZXhwIjoxNjQ3Njk5MTY5fQ.IV4_LCK-m1KtQSRNjFEqw4VrUC56AmLPd3pXP2cpuiQup-gvgY57xTJoSx5geasEZ8cfAzACM5n9ZX5YCO5ang';

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let myReq: HttpRequest<any> = request;
    myReq = request.clone({
      headers: request.headers
        .set('Authorization', this.bearerToken)
        .set('X-TENANT-ID', this.tenantID),
    });

    return next.handle(myReq);
  }
}
