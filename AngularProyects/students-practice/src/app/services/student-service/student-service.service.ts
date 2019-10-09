import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private studentList = new Array<Student>();
  private studentId = 0;
  // private studentChoosed = new Student();

  constructor() { }

  addStudent(student: Student) {
      this.studentId++;
      student.studentId = this.studentId;
      this.studentList.push(student);
  }

  getAll() {
    return this.studentList;
  }

  getStudentById(id: number) {
    const students = this.studentList.filter(student => {
      return student.studentId === id;
    });

    return (students.length > 0) ? students[0] : null;
  }

}
