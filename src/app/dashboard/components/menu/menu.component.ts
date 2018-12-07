
import { User } from '@app/core/auth/models/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { Option } from '@app/core/auth/models/option';
import { ShopListComponent } from '@app/dashboard/components/shop-list/shop-list.component';
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
      this.user = user;

      // Définit le tableau des options de menus...
      this.options = this.user.getMainMenuOptions();
    });
   }

  ngOnInit() {
  }

  /**
   * Lance la navigation vers la route définie
   */
  public onClick(option: Option) {
    const optionObject = new Option();
    optionObject.deserialize(option);
    this.router.navigate([optionObject.getRoute()]);
  }
}
