import { Component, OnInit , EventEmitter} from '@angular/core';
import { StudentServiceService } from 'src/app/services/student-service/student-service.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { CareerAsyncService } from 'src/app/services/career-asyncService/career-async.service';
import { Career } from 'src/app/models/career';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  careerList = new Array<Career>();
  // studentChoosed = new Student();

  // constructor(private serviceStudent : StudentServiceService) { }

  // ngOnInit() {
  // }

  // viewDetails(idStudent : Number){

  //     this.studentChoosed = this.serviceStudent.getStudentById(idStudent);

  // }

  student = new Student();

  constructor(private studentService: StudentAsyncService, private route: ActivatedRoute, private careersService: CareerAsyncService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    Promise.all([this.careersService.getCareers(), this.studentService.getStudentById(id)])
      .then((result) => {
        this.careerList = result[0];
        let studentCareer = new Career();

        this.student.studentId = result[1].studentId;
        this.student.firstName = result[1].firstName;
        this.student.lastName = result[1].lastName;
        this.student.email = result[1].email;
        this.student.dni = result[1].dni;
        this.student.address = result[1].address;

        if (result[1].careerId != null) {
            result[0].forEach(career => {
              if (career.careerId === result[1].careerId) {
                  studentCareer = career;
              }
            });

        } else {
          studentCareer.careerId = 0 ;
          studentCareer.name = '---';
          studentCareer.description = '---';
        }

        this.student.career = studentCareer;

      }).catch((err) => {
          console.log(err);
      });

  }}


