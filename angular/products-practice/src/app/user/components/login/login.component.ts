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
      email: ['',         {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur'
      }],
      password: ['', [Validators.required]]
    });
  }

  get email() {
    return this.usersForm.get('email');
  }
  get password() {
    return this.usersForm.get('password');
  }


  ngOnInit() {
    const token = this.userService.getToken;
    // Check if there is a token in local storage
    if (token !== null) {
      // If there is a token don't let user enter login again, redirect to list
      console.log('token in login component: ' + token);
      this.router.navigateByUrl('/list');
    }
  }

  login() {
    const request = Object.assign({}, this.usersForm.value);
    console.log(request);

    this.userService.login(request).subscribe(
      result => {
        console.log(result);
        // set token
        this.userService.setToken = result.jwt;
        this.router.navigateByUrl('/list');
      },
      err => {
        console.log(err);
      }
    );
  }


}
