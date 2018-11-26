import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  /**
   * Modifie les requêtes pour envoyer le token si disponible
   * @param request
   * @param next
   */
  public intercept (request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.authenticationService.hasToken()) {
      request = request.clone({
        setHeaders: {
          'X-Auth-Token': this.authenticationService.getToken()
        }
      });
    }
    return next.handle(request)
      .pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            console.log('Réponse serveur : ' + event.status);
          }
        }, (error) => {
          console.log('Erreur : ' + error.status + ' => ' + error.message);
        })
      );
  }
}
