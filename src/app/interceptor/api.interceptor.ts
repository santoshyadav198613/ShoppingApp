import { Injectable, Inject } from '@angular/core';
import { HttpRequest, HttpHeaders, HttpInterceptor,HttpHandler,HttpEvent } from '@angular/common/http';
import { ApiEndpoint } from '../service/api/Iapi';
import { EndPoint, apiEndPoint } from '../service/api/api.value';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor( @Inject(EndPoint) private endPoint: ApiEndpoint) {

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.method === 'POST') {
            let body = req.body;
            body.createdDate = new Date();

            let request = req.clone({
                headers: req.headers.set('token', this.endPoint.token),
                body: body
            });
            return next.handle(request);
        }
        return next.handle(req);
    };

}
