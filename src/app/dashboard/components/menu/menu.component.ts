import { User } from '@app/core/auth/models/user';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public userSubscription: Subscription;
  public user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.userSubscription = this.authenticationService.getUser().subscribe((user) => {
      this.user = user;

      // Définit le tableau des options de menus...
      console.log('Menus : ' + JSON.stringify(user.menus));
    });
   }

  ngOnInit() {
  }

}
