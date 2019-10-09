import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/students/';

  constructor(private http: HttpClient) { }

  // ready for test
    addStudent(student: Student): Promise <any> {
        return this.http.post(this.apiUrl, student).toPromise();
    }

    modifyStudent(student: Student, id: number): Promise <any> {
      return this.http.patch(this.apiUrl + id, student).toPromise();
  }

    // ready for test
    getStudents(): Promise <any> {
      return this.http.get(this.apiUrl).toPromise();
   }

   // ready for test
   getStudentById(id: number): Promise <any> {

    return this.http.get(this.apiUrl + id).toPromise();
  }

  // modification nedded


}
