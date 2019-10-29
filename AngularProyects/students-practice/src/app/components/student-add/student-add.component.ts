import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  careerList = new Array<Career>();
  lastName: string;
  firstName: string;
  dni: string;
  email: string;
  address: string;
  careerId: number;

  // normal server
  // constructor(private studentService: StudentServiceService) { }
  constructor(private studentService: StudentAsyncService, private careerService: CareerAsyncService) { }

  ngOnInit() {
  }

  getCareers() {
    this.careerService
    .getCareers()
    .then((result) => {
      this.careerList = result;
    }).catch((err) => {
      console.log(err);
    });
  }

  addStudent() {
      const student = new Student();
      student.firstName = this.firstName;
      student.lastName = this.lastName;
      student.dni = this.dni;
      student.email = this.email;
      student.address = this.address;
      student.careerId = this.careerId;
      // normal server
      // this.studentService.addStudent(student);

      this.studentService
      .addStudent(student)
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
  }


}
