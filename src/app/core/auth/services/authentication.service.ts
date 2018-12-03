import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('eshopUser')));
    this.user = this.userSubject.asObservable();
  }

  /**
   * Retourne l'utilisateur courant
   * @return User
   */
  public get userValue(): User {
    return this.userSubject.value;
  }

  /**
   * Retourne un Observable sur l'utilisateur courant
   */
  public getUser(): Observable<User> {
    return this.user;
  }

  public login(userData: any) {
    return this.http.post<any>(
      environment.apiUrl + 'signin',
      userData
    ).pipe(
      map((user) => {
       if (user && user.token) {
         localStorage.setItem('eshopUser', JSON.stringify(user.token));
         this.userSubject.next(user);
       }
       return user;
      })
    );
  }

  public hasToken(): boolean {
    const token: any = localStorage.getItem('eshopUser');

    return token;
  }

  /**
   * Retourne le token Utilisateur enregistré
   */
  public getToken(): string {
    return localStorage.getItem('eshopUser');
  }

  /**
   * Déconnecte l'utilisateur et redirige vers la page de login
   */
  public logout() {
    localStorage.removeItem('eshopUser');
    this.userSubject.next(null);
  }
}
