
import { HttpClient, HttpResponse } from '@angular/common/http';
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
  public getShops(): Observable<any> {
    return this.http.get<any>(
      environment.apiUrl + 'app_dev.php/shops',
      {observe: 'response'}
    );
  }
}
