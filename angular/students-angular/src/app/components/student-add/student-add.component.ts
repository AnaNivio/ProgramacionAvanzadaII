import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  addStudent(){
    
  }
  

}
