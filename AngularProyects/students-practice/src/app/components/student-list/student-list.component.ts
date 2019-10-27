import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { Career } from 'src/app/models/career';
import { CareerAsyncService } from 'src/app/services/career-asyncService/career-async.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = new Array<Student>();
  careerList = new Array<Career>();

  // normal service
  // constructor(private studentsService: StudentServiceService) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // async service
  constructor(private studentsService: StudentAsyncService, private careersService: CareerAsyncService) {   }

  ngOnInit() {
    // this.studentsList = this.studentsService.getAll();
    Promise.all([this.careersService.getCareers(), this.studentsService.getStudents()])
    .then((result) => {
      this.careerList = result[0];

      result[1].forEach(element => {
        let student = new Student();
        let studentCareer = new Career();

        student.studentId = element.studentId;
        student.firstName = element.firstName;
        student.lastName = element.lastName;
        student.email = element.email;
        student.dni = element.dni;
        student.address = element.address;

        if (element.careerId != null) {
            result[0].forEach(career => {
              if (career.careerId === element.careerId) {
                  studentCareer = career;
              }
            });

        } else {
          studentCareer.careerId = 0 ;
          studentCareer.name = '---';
          studentCareer.description = '---';
        }

        student.career = studentCareer;

        this.studentsList.push(student);
      });

    }).catch((err) => {
        console.log(err);
    })

  }

  deleteStudent(id: number) {
    this.studentsService
    .deleteStudent(id)
    .then((result) => {
      console.log('Success!: ' + result);
    }).catch((err) => {
      console.log(err);
    });
  }

}
