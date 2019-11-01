import { Component, OnInit, EventEmitter } from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';

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
    private studentService: StudentAsyncService,
    private route: ActivatedRoute,
    private careersService: CareerAsyncService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    Promise.all([
      this.careersService.getCareers(),
      this.studentService.getStudentById(id)
    ])
      .then(result => {
        this.careersList = result[0];
        console.log(this.student);
        this.student.studentId = result[1].studentId;
        this.student.firstName = result[1].firstName;
        this.student.lastName = result[1].lastName;
        this.student.address = result[1].address;
        this.student.email = result[1].email;
        this.student.dni = result[1].dni;

        if (result[1].careerId === null) {
          this.student.career = new Career(0, '---');
        } else {
          this.careersList.forEach(career => {
            if (career.careerId === result[1].careerId) {
              this.student.career = new Career(career.careerId, career.name);
            }
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
}
