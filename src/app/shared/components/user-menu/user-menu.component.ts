import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/auth/models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  /**
   * Souscription à l'utilisateur identifié
   */
  public userSubscription: Subscription;

  /**
   * Utilisateur identifié
   */
  public user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
    ) {
      this.userSubscription = this.authenticationService.getUser().subscribe((user) => {
        this.user = user;
      });
    }

  ngOnInit() {

  }

  public logout() {
    console.log('Déconnexion utilisateur');
    this.authenticationService.logout();
    this.router.navigate(
      ['/login']
    );
  }

}
