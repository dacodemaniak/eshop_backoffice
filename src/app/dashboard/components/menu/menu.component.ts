
import { User } from '@app/core/auth/models/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { Option } from '@app/core/auth/models/option';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  /**
   * Observateur sur un objet User
   */
  public userSubscription: Subscription;

  /**
   * Instance d'utilisateur
   */
  public user: User;

  /**
   * Options de menu disponibles pour l'utilisateur courant
   */
  public options: Array<Option>;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.userSubscription = this.authenticationService.getUser().subscribe((user) => {
      this.user = new User();
      this.user.deserialize(user);

      // Définit le tableau des options de menus...
      this.options = this.user.getMainMenuOptions();
    });
   }

  ngOnInit() {
  }
}
