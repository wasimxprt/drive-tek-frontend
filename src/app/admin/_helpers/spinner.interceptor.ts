import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from '../_services/spinner/spinner.service';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private readonly spinnerOverlayService: SpinnerService) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const spinnerSubscription: Subscription = this.spinnerOverlayService.spinner$.subscribe();
        return next
            .handle(req)
            .pipe(finalize(() => spinnerSubscription.unsubscribe()));
    }
}