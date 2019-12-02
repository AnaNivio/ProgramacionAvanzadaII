import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  user = { email: '', password: '' };

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.validateUserEmail.bind(this)],
          updateOn: 'blur'
        }      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordMatch()]
      ]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    // Check if there is a token in local storage
    if (token !== null) {
      // If there is a token don't let user enter login again, redirect to list
      this.router.navigateByUrl('/list');
    }

    this.setValues();
  }

  setValues() {
    this.registerForm.get('email').valueChanges.subscribe(val => {
      this.user.email = val;
    });

    this.registerForm.get('password').valueChanges.subscribe(val => {
      this.user.password = val;
    });
  }

  onSubmit() {
    console.log(this.user);
    this.loginService.register(this.user).subscribe(
      result => {
        console.log('registerResult: ' + result);

        // Redirect to home after 4 seconds
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 4000);
      },
      err => {
        console.log(err);
      }
    );
  }

  passwordMatch(): ValidatorFn {
    // return always gonna be the same; it represents the configured
    // validator function
    // it's called by 2nd password
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (this.user.password !== control.value) {
        // get control value to compare
        return { passwordMatch: true };
      } else {
        return null;
      }
    };
  }

  validateUserEmail(): Promise<ValidationErrors | null> {
    const email: string = this.registerForm.get('email').value;

    return new Promise((resolve, reject) => {
      this.loginService
        .validateEmail(email)
        .then(result => {
          resolve(null);
        })
        .catch(err => {
          if (err.status === 409) {
            resolve({
              asyncInvalid: true // Name that is called for custom validator: formcontrolname.errors.asyncInvalid
            });
          }
          console.log(err);
          reject('Error on getting email');
        });
    });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmedPassword() {
    return this.registerForm.get('confirmedPassword');
  }
}

