import { Component, OnInit , EventEmitter} from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  
  // studentChoosed = new Student();

  // constructor(private serviceStudent : StudentServiceService) { }

  // ngOnInit() {
  // }

  // viewDetails(idStudent : Number){

  //     this.studentChoosed = this.serviceStudent.getStudentById(idStudent);
      
  // }

  private student: Student;

  constructor(private studentService: StudentServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    let studentId = Number(this.route.snapshot.paramMap.get('id'));
    
    this.student = this.studentService.getStudentById(studentId);
  }

}


