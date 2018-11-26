import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/core/auth/services/authentication.service';
import { UserMenuComponent } from '@app/core/auth/pages/user-menu/user-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public haveUser: boolean = false;

  constructor(authenticationService: AuthenticationService) {
    this.haveUser = authenticationService.userValue ? true : false;
  }

  ngOnInit() {
  }

}
