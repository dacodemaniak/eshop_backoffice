
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoaderService {

  constructor(private http: HttpClient) { }

  public initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      let token: string;
      if (token = JSON.parse(localStorage.getItem('eshopUser'))) {
        this.http.get<any>(
          environment.apiUrl + 'token/' + token,
        ).subscribe((user) => {
          resolve(user);
        });
      } else {
        resolve();
      }
    });
  }
}
