import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/students/';

  constructor(private http: HttpClient) { }

<<<<<<< HEAD
  // ready for test
    addStudent(Student: Student): Promise <any> {
=======
    addStudent(student: Student): Promise <any> {
>>>>>>> career endpoints and components added
        const httpOptions = {
          headers : new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        return this.http.post(this.apiUrl, Student, httpOptions).toPromise();
    }

<<<<<<< HEAD
    // ready for test
    modifyStudent(Student: Student, id: number): Promise <any> {
      console.log(Student);
=======
    modifyStudent(student: Student, id: number): Promise <any> {
      console.log(student);
>>>>>>> career endpoints and components added
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.patch(this.apiUrl + id, Student, httpOptions).toPromise();
    }

    getStudents(): Promise <any> {
      return this.http.get(this.apiUrl).toPromise();
   }


   getStudentById(id: number): Promise <any> {

    return this.http.get(this.apiUrl + id).toPromise();

   }

   // ready to test
    deleteStudent(id: number): Promise <any> {
      return this.http.delete(this.apiUrl + id).toPromise();

   }


}
