import { Component, OnInit, EventEmitter } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';
import { StudentServiceObservable } from 'src/app/services/student-service-observable/student-service-observable.service';
import { CareerServiceObservable } from 'src/app/services/career-service-observable/career-service-observable.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  careersList = new Array<any>();
  // studentChoosed = new Student();

  // constructor(private serviceStudent : StudentServiceService) { }

  // ngOnInit() {
  // }

  // viewDetails(idStudent : Number){

  //     this.studentChoosed = this.serviceStudent.getStudentById(idStudent);

  // }

  student = new Student();

  // tslint:disable-next-line: max-line-length
  constructor(
    private studentService: StudentServiceObservable,
    private route: ActivatedRoute,
    private careersService: CareerServiceObservable
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.careersService.getCareers().subscribe(response => {
      this.careersList = response as Career[];
    },
    error => {
      console.log(error.message);
    });

    this.studentService.getStudents().subscribe(response => {
      this.student.studentId = response.studentId;
      this.student.firstName = response.firstName;
      this.student.lastName = response.lastName;
      this.student.address = response.address;
      this.student.email = response.email;
      this.student.dni = response.dni;

      if (response.careerId === null) {
        this.student.career = new Career(0, '---');
      } else {
        this.careersList.forEach(career => {
          if (career.careerId === response.careerId) {
            this.student.career = new Career(career.careerId, career.name);
          }
        });
      }
    },
    error => {
      console.log(error.message);
    });
  }

}
