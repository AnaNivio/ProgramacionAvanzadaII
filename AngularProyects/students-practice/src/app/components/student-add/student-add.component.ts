import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';

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

  constructor(private studentService: StudentServiceService) { }

  ngOnInit() {
  }

  addStudent(){
      var student = new Student();
      student.firstName = this.firstName;
      student.lastName = this.lastName; 
      student.dni = this.dni;
      student.email = this.email;
      student.address = this.address;

      this.studentService.addStudent(student);
  }
  

}
