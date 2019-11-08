import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  studentsForm: FormGroup;

  constructor(private formBuilder: FormBuilder
    ) {
    this.studentsForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  get email() {
    return this.studentsForm.get('email');
  }
  get password() {
    return this.studentsForm.get('password');
  }

}
