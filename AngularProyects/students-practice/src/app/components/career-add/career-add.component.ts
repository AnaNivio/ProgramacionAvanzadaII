import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/models/career';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';

@Component({
  selector: 'app-career-add',
  templateUrl: './career-add.component.html',
  styleUrls: ['./career-add.component.css']
})
export class CareerAddComponent implements OnInit {
  name: string;
  description: string;
  constructor(private careerService: CareerAsyncService) { }

  ngOnInit() {
  }

  addCareer() {
      const career = new Career();
      career.name = this.name;
      career.description = this.description;

      this.careerService
      .addCareer(career)
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
  }


}
