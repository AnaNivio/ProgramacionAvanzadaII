import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logged = false;

  constructor(private loginService: LoginService) {
    this.loginService.tokenValue.subscribe(next => {
      if (next) {
        this.logged = true;
      } else {
        this.logged = false;
      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.logged = true;
    }
  }
}
