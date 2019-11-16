import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserAsyncService } from 'src/app/services/user-asyncService/user-async.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  usersForm: FormGroup;
  message: string;

  constructor(private userService: UserAsyncService, private router: Router, private formBuilder: FormBuilder
    ) {
    this.usersForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmepassword:['', [Validators.required]]
    });
  }

  get email() {
    return this.usersForm.get('email');
  }
  get password() {
    return this.usersForm.get('password');
  }
  get confirmepassword() {
    return this.usersForm.get('confirmepassword');
  }

  ngOnInit() {
  }
  
  onSubmit(){
    let userCredentials = new User();
    userCredentials.email = this.usersForm.get('email').value;
    userCredentials.password = this.usersForm.get('password').value;

    this.userService.signUp(userCredentials).subscribe(
      response => {    
        console.log("usuario creado")
        this.router.navigate(['/login']);
      },
    error => {
      if(error.status === 401){
        this.message = 'Usuario no tiene permisos para realizar la accion';
      }else if (error.status === 403) {
        this.message = 'Usuario no puede entrar a este sitio';
      }
      else if (error.status === 404) {
        this.message = 'Usuario y/o contrasenia invalida';
      }
    });
  }

}
