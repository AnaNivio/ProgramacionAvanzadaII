import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceObservable {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/students';

  constructor(private http: HttpClient) { }

    addStudent(student: any): Observable <any> {
      console.log(student);
      const httpOptions = {
          headers : new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
      return this.http.post(this.apiUrl, student, httpOptions);
    }

    modifyStudent(student: any, id: number): Observable <any> {
      console.log(student);
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.patch(this.apiUrl + id, student, httpOptions);
    }

  getStudents(): Observable<any> {
      return this.http.get(this.apiUrl);
  }


   getStudentById(id: number): Observable <any> {

    return this.http.get(this.apiUrl + id);

   }

   // ready to test
    deleteStudent(id: number): Observable <any> {
      return this.http.delete(this.apiUrl + id);

   }


}
