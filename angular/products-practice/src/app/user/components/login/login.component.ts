import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserAsyncService } from '../../services/user-asyncService/user-async.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersForm: FormGroup;
  message: string;

  constructor(private userService: UserAsyncService, private router: Router, private formBuilder: FormBuilder
    ) {
    this.usersForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.usersForm.get('email');
  }
  get password() {
    return this.usersForm.get('password');
  }


  onSubmit() {
    let userCredentials = new User();
    userCredentials.email = this.usersForm.get('email').value;
    userCredentials.password = this.usersForm.get('password').value;

    this.userService.login(userCredentials).subscribe(
      response => {
        console.log(localStorage.getItem('token'));
        localStorage.setItem('token', response.jwt);
        this.router.navigate(['/list']);
      },
    error => {
      if (error.status === 401) {
        this.message = 'Usuario no tiene permisos para realizar la accion';
      } else if (error.status === 403) {
        this.message = 'Usuario no puede entrar a este sitio';
      } else if (error.status === 404) {
        this.message = 'Usuario y/o contrasenia invalida';
      }
    });
  }

}
