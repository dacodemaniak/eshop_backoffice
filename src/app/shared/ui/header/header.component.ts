import { first } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { UserMenuComponent } from '@app/shared/components/user-menu/user-menu.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    /**
   * Souscription à l'utilisateur identifié
   */
  public userSubscription: Subscription;

  public haveUser: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.userSubscription = this.authenticationService.getUser().subscribe((user) => {

      if (user && user.token) {
        this.haveUser = true;
      } else {
        this.haveUser = false;
      }
    });
  }

  ngOnInit() {
  }

}
