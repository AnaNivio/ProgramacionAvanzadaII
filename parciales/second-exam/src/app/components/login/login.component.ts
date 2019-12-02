import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', {validators: [Validators.required, Validators.email],
                  updateOn: 'blur'}],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    const token = this.loginService.getToken;
    // Check if there is a token in local storage
    if (token !== null) {
      // If there is a token don't let user enter login again, redirect to list
      this.router.navigateByUrl('/list');
    }
  }

  login() {
    const request = Object.assign({}, this.loginForm.value);

    this.loginService.login(request).subscribe(
      result => {
        // set token
        this.loginService.setToken = result.jwt;
        this.router.navigateByUrl('/list');
      },
      err => {
        if (err.status === 401) {
          console.log('Nombre de usuario o contrasenia erronea');
        } else if (err.status === 403) {
          console.log('La pagina web no puede ser ingresada por el usuario. Forbidden');
        } else if (err.status === 404) {
          console.log('El usuario que ingreso no existe. Intente de nuevo');
        }
      });
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
