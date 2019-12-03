import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private carService: CarService, private router: Router) {
    this.carForm = this.formBuilder.group({
      brand: ['', [Validators.required]],
      year: ['', [Validators.required]],
      model: ['', [Validators.required]],
      domain : [
        '',
        {
          validators: [Validators.required],
          asyncValidators: [this.validateDomain.bind(this)],
          updateOn: 'blur'
        }
      ]
      // correcion: me habia quedado un Validators.email. Dominio no tiene un email
    });
   }

  ngOnInit() {
  }

  get brand() {
    return this.carForm.get('brand');
  }

  get year() {
    return this.carForm.get('year');
  }

  get domain() {
    return this.carForm.get('domain');
  }

  get model() {
    return this.carForm.get('model');
  }

  validateDomain(): Promise<ValidationErrors | null> {
    const domain: string = this.carForm.get('domain').value;

    return new Promise((resolve, reject) => {

      this.carService
        .validateDomain(domain)
        .then(result => {
          console.log('domain NOT found');
          resolve(null);
        })
        .catch(err => {
          console.log('domain found');

          if (err.status === 409) {
            resolve({
              asyncInvalid: true // Name that is called for custom validator: formcontrolname.errors.asyncInvalid
            });
          }

          console.log(err);
        });
    });
  }

  addCars() {
    const request = Object.assign({}, this.carForm.value);

    this.carService.addCar(request).subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error.message);
    });
  }

}
