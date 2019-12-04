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
  headElements = [
    { name: 'carId', translatedName: '#' },
    { name: 'brand', translatedName: 'Brand' },
    { name: 'model', translatedName: 'Model' },
    { name: 'year', translatedName: 'Year' },
    { name: 'domain', translatedName: 'Domain' }
  ];
  sortedBy = 'carId';
  sortOrder = 'ASC';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loadTable();

    // original
      //   this.carService.getCars().subscribe(response => {
  //     const carsJson = response;

  //     carsJson.forEach(element => {
  //       const car = new Car();
  //       car.carId = element.carId;
  //       car.brand = element.brand;
  //       car.model = element.model;
  //       car.domain = element.domain;
  //       car.year = element.year;

  //       this.carList.push(car);

  //    });
  //   },
  //   error => {
  //     console.log(error.message);
  //   });
  }

  loadTable() {

    this.carService.getCarsByColumn(this.sortedBy, this.sortOrder).subscribe(response => {
      this.carList = response;
      // correccion: se puede pasar los datos que tengo del response sin la necesidad de recorrer
      // cada uno de ellos y transformarlos en autos. Es mas, eso me estaba generando error y
      // no estaba ordenado los datos en base a la columna que le mandaba sino al default que es por id
    },
    error => {
      console.log(error.message);
    });
  }

  sort(orderBy: string) {
    if (this.sortedBy === orderBy) {
      if (this.sortOrder === 'ASC') {
        this.sortOrder = 'DESC';
      } else {
        this.sortOrder = 'ASC';
      }
    } else {
      this.sortOrder = 'ASC';
    }
    this.sortedBy = orderBy;
    console.log(this.sortedBy);
    console.log(this.sortOrder);
    this.loadTable();
  }


}
