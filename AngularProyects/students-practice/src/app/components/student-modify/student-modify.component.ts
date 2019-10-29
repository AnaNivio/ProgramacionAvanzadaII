import { Component, OnInit } from '@angular/core';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent implements OnInit {

  lastName: string;
  firstName: string;
  dni: string;
  email: string;
  address: string;
  careerId: number;


  // normal server
  // constructor(private studentService: StudentServiceService) { }
  constructor(private studentService: StudentAsyncService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  modifyStudent() {
      const studentId = Number(this.route.snapshot.paramMap.get('id'));
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
      .modifyStudent(student, studentId)
      .then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
  }


}
