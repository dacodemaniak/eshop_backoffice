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
    let token: string;

    this.userSubject = new BehaviorSubject<User>(new User());

    if ((token = localStorage.getItem('eshopUser'))) {
      // Authentifie l'utilisateur à partir de l'API
      this.tokenAuthenticate(token).then((user) => {
        console.log('Utilisateur : ' + user);
        this.userSubject.next(user);
        this.user = this.userSubject.asObservable();

      });
    }

  }
  /**
   * Charge à partir du token du localStorage
   */
  public initialize(): Promise<any> {
    return new Promise((resolve, reject) => {
      let token: string;
      if (token = JSON.parse(localStorage.getItem('eshopUser'))) {
        this.http.get<any>(
          environment.apiUrl + 'token/' + token,
        ).subscribe((user) => {
          this.userSubject.next(user);
          this.user = this.userSubject.asObservable();
          resolve(user);
        });
      } else {
        resolve();
      }
    });
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

  private tokenAuthenticate(token: string): Promise<User> {
    return new Promise((resolve) => {
      this.http.get<any>(
        environment.apiUrl + 'token/' + token,
      ).pipe(
        map((user) => {
          console.log(user);
          resolve(user);
         if (user && user.token) {
           this.userSubject.next(user);
         }
        })
      );
    });

  }
}
