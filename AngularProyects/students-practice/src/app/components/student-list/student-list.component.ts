import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = new Array<Student>();
  careersList = new Array<Career>();

  // normal service
  // constructor(private studentsService: StudentServiceService) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // async service
  constructor(private studentsService: StudentAsyncService, private careerService: CareerAsyncService) {   }

  // logica siempre en ts no en html!!
  ngOnInit() {
    Promise.all([this.careerService.getCareers(), this.studentsService.getStudents()])
    .then((result) => {
      this.careersList = result[0];
      const studentsJson = result[1];

      studentsJson.forEach(element => {
        let student = new Student();
        student.studentId = element.studentId;
        student.firstName = element.firstName;
        student.lastName = element.lastName;
        student.address = element.address;
        student.email = element.email;
        student.dni = element.dni;

        if (element.careerId === null) {
          student.career = new Career(0, '---');
        } else {
          this.careersList.forEach(career => {
            if (career.careerId === element.careerId) {
              student.career = new Career(career.careerId, career.name);
            }
          });
        }

        this.studentsList.push(student);

      });

    }).catch((err) => {
        console.log(err);
    });
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
