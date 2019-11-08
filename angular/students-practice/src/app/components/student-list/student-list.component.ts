import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { Career } from 'src/app/models/career';
import { StudentServiceObservable } from 'src/app/services/student-service-observable/student-service-observable.service';
import { CareerServiceObservable } from 'src/app/services/career-service-observable/career-service-observable.service';

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
  constructor(private studentsService: StudentServiceObservable, private careerService: CareerServiceObservable) {   }

  // logica siempre en ts no en html!!
  ngOnInit() {

    this.careerService.getCareers().subscribe(response => {
      this.careersList = response as Career[];
    },
    error => {
      console.log(error.message);
    });

    this.studentsService.getStudents().subscribe(response => {
      const studentsJson = response;

      studentsJson.forEach(element => {
           const student = new Student();
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
    },
    error => {
      console.log(error.message);
    });


    // Promise.all([this.careerService.getCareers(), this.studentsService.getStudents()])
    // .then((result) => {
    //   this.careersList = result[0];
    //   const studentsJson = result[1];

    //   studentsJson.forEach(element => {
    //     let student = new Student();
    //     student.studentId = element.studentId;
    //     student.firstName = element.firstName;
    //     student.lastName = element.lastName;
    //     student.address = element.address;
    //     student.email = element.email;
    //     student.dni = element.dni;

    //     if (element.careerId === null) {
    //       student.career = new Career(0, '---');
    //     } else {
    //       this.careersList.forEach(career => {
    //         if (career.careerId === element.careerId) {
    //           student.career = new Career(career.careerId, career.name);
    //         }
    //       });
    //     }

    //     this.studentsList.push(student);

    //   });

    // }).catch((err) => {
    //     console.log(err);
    // });
  }

  deleteStudent(id: number) {
    this.studentsService.deleteStudent(id).subscribe(response => {
      console.log('Success!: ' + response);
    },
    error => {
      console.log(error.message);
    });
  }


}
