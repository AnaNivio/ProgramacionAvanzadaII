import { Component, OnInit } from '@angular/core';
import { StudentAsyncService } from 'src/app/services/student-asyncService/student-async.service';
import { Student } from 'src/app/models/student';
import { ActivatedRoute } from '@angular/router';
import { Career } from 'src/app/models/career';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { CareerAsyncService } from 'src/app/services/careers-asyncService/careers-async.service';
import { StudentServiceObservable } from 'src/app/services/student-service-observable/student-service-observable.service';
import { CareerServiceObservable } from 'src/app/services/career-service-observable/career-service-observable.service';

@Component({
  selector: 'app-student-modify',
  templateUrl: './student-modify.component.html',
  styleUrls: ['./student-modify.component.css']
})
export class StudentModifyComponent implements OnInit {
  careerList = new Array<Career>();
  // lastName: string;
  // firstName: string;
  // dni: string;
  // email: string;
  // address: string;
  // careerId: number;

  studentsForm: FormGroup;

  // normal server
  // constructor(private studentService: StudentServiceService) { }

  // tslint:disable-next-line: max-line-length
  constructor(private studentService: StudentServiceObservable, private careerService: CareerServiceObservable, private formBuilder: FormBuilder, private route: ActivatedRoute) {
        this.studentsForm = this.formBuilder.group({

      // PONER LOS GETS DE CADA FORM CONTROL!!!
      firstName: ['', { validators: [Validators.required], updateOn: 'blur'}],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dni: ['', [Validators.required]],
      address: ['', [Validators.required]],
      careerId: ['', [Validators.required]]
    });
   }

  ngOnInit() {
    this.careerService.getCareers().subscribe(response => {
      this.careerList = response as Career[];
    },
    error => {
      console.log(error.message);
    });
  }

  get firstName() {
    return this.studentsForm.get('firstName');
  }

  get lastName() {
    return this.studentsForm.get('lastName');
  }

  get email() {
    return this.studentsForm.get('email');
  }

  get dni() {
    return this.studentsForm.get('dni');
  }

  get address() {
    return this.studentsForm.get('address');
  }

  get careerId() {
    return this.studentsForm.get('careerId');
  }

  modifyStudent() {
      const studentId = Number(this.route.snapshot.paramMap.get('id'));
      // const student = new Student();
      // this.student.firstName = this.firstName;
      // student.lastName = this.lastName;
      // student.dni = this.dni;
      // student.email = this.email;
      // student.address = this.address;
      // student.careerId = this.careerId;
      // normal server
      // this.studentService.addStudent(student);

      const request = Object.assign({}, this.studentsForm.value);

      this.studentService.modifyStudent(request, studentId).subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error.message);
      });
  }


}

