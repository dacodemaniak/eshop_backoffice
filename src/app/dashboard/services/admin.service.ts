
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

import { Shop } from '@app/dashboard/models/shop';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  /**
   * Retourne la liste des boutiques
   */
  public getShops(): any {
    return this.http.get<any>(
      environment.apiUrl,
      {observe: 'response'}
    ).subscribe((response) => {
      if (parseInt(response.headers.get('status'), 0) === 200) {
        // On récupère les données
        const body = response.headers.get('body');
        console.log(body);
        return response.headers.get('body');
      }
      return [];
    });
  }
}
