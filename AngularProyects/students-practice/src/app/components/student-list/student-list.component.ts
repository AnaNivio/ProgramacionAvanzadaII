import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
<<<<<<< HEAD
import { Career } from 'src/app/models/career';
import { CareerAsyncService } from 'src/app/services/career-asyncService/career-async.service';
=======
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { Career } from 'src/app/models/career';
>>>>>>> career endpoints and components added

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = new Array<Student>();
<<<<<<< HEAD
  careerList = new Array<Career>();
=======
  studentCareer = new Career();
  careersList = new Array<Career>();
>>>>>>> career endpoints and components added

  // normal service
  // constructor(private studentsService: StudentServiceService) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // async service
<<<<<<< HEAD
  constructor(private studentsService: StudentAsyncService, private careersService: CareerAsyncService) {   }
=======
  constructor(private studentsService: StudentAsyncService, private careerService: CareerAsyncService) {   }
>>>>>>> career endpoints and components added

  ngOnInit() {
    // this.studentsList = this.studentsService.getAll();
    Promise.all([this.careersService.getCareers(), this.studentsService.getStudents()])
    .then((result) => {
<<<<<<< HEAD
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

=======
        console.log(result);
        this.studentsList = result;
>>>>>>> career endpoints and components added
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

  getCareer() {
    this.careerService
    .getCareers()
    .then((result) => {
      this.careersList = result;
    }).catch((err) => {
      console.log(err);
    });
  }

  getCareerById(id: number) {
    this.careerService
    .getCareerById(id)
    .then((result) => {
      this.studentCareer = result;
    }).catch((err) => {
      console.log(err);
    });
  }


}
