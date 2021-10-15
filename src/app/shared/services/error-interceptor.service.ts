import { HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from 'src/app/app.config';
import { ErrorType } from '../enums';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(@Inject(APP_CONFIG) private appConfig: IAppConfig, private toastr: ToastrService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(this.appConfig.RetryPolicy),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                let errorType: ErrorType = ErrorType.ServerError;
                if (error.error instanceof ErrorEvent) {
                    // frontend error
                    errorMessage = `Error: ${error.error.message}`;
                    errorType = ErrorType.ClientError;
                } else {
                    // server error
                    errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
                }
                this.showErrorToast(errorType, errorMessage);

                console.error(errorMessage);
                return throwError(errorMessage);
            })
        );
    }

    showErrorToast(type: ErrorType, message: string) {
        // todo - add to translations at some point
        this.toastr.error(message, type === ErrorType.ClientError ? 'An Error Occurred' : 'Server Error');
    }
}
