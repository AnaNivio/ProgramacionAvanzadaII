import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  lastName: string;
  firstName: string;
  dni: string;
  email: string;
  address: string;

  // normal server
  // constructor(private studentService: StudentServiceService) { }
  constructor(private studentService: StudentAsyncService) { }

  ngOnInit() {
  }

  addStudent() {
      const student = new Student();
      student.firstName = this.firstName;
      student.lastName = this.lastName;
      student.dni = this.dni;
      student.email = this.email;
      student.address = this.address;
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
