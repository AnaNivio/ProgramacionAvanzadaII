import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserAsyncService } from '../../services/user-asyncService/user-async.service';

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
    private userService: UserAsyncService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: [
        '',
        {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.validateUserEmail.bind(this)],
          updateOn: 'blur'
        }
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmepassword: [
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
    this.userService.register(this.user).subscribe(
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
      this.userService
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

  get confirmepassword() {
    return this.registerForm.get('confirmepassword');
  }
}
