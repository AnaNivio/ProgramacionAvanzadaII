import { Component, OnInit, Input } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = new Array<Student>();

  constructor(private studentsService : StudentServiceService) { }

  ngOnInit() {
    this.studentsList = this.studentsService.getAll();
  }
 

}
