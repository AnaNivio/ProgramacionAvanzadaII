import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  carList = new Array<Car>();

  constructor(private carService: CarService) { }

  ngOnInit() {

    this.carService.getCars().subscribe(response => {
      const carsJson = response;

      carsJson.forEach(element => {
        const car = new Car();
        car.carId = element.carId;
        car.brand = element.brand;
        car.model = element.model;
        car.domain = element.domain;
        car.year = element.year;

        this.carList.push(car);

     });
    },
    error => {
      console.log(error.message);
    });

  }

}
