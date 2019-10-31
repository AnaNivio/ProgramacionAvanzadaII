import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { NavListService } from 'src/app/services/nav-list-service/nav-list.service';

@Injectable()
export class NavigateAwayFromLoginDeactivatorService implements CanDeactivate<LoginComponent> {

  constructor(public nav: NavListService) {  }

  canDeactivate(target: LoginComponent) {
    this.nav.show();
    return true;
  }
}
