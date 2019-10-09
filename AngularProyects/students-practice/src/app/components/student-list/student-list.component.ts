import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = new Array<Student>();

  // normal service
  // constructor(private studentsService: StudentServiceService) { }
 // tslint:disable-next-line:no-trailing-whitespace
 
  // async service
  constructor(private studentsService: StudentAsyncService) {   }

  ngOnInit() {
    // this.studentsList = this.studentsService.getAll();
    this.studentsService.getStudents()
    .then((result) => {
        this.studentsList = result;
    }).catch((err) => {
        console.log(err);
    });
  }

}
