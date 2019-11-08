import { Component, OnInit, Input } from '@angular/core';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.css']
})
export class CareerListComponent implements OnInit {

  careersList = new Array<Career>();

  constructor(private careerService: CareerAsyncService) {   }

  ngOnInit() {
    this.careerService.getCareers()
    .then((result) => {
        console.log(result);
        this.careersList = result;
    }).catch((err) => {
        console.log(err);
    });
  }

}
