import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentAsyncService {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/students/';

  constructor(private http: HttpClient) { }

    addStudent(student: any): Promise <any> {
        const httpOptions = {
          headers : new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        return this.http.post(this.apiUrl, student, httpOptions).toPromise();
    }

    modifyStudent(student: any, id: number): Promise <any> {
      console.log(student);
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.patch(this.apiUrl + id, student, httpOptions).toPromise();
    }

  getStudents(): Observable<any> {
      return this.http.get(this.apiUrl);
  }


   getStudentById(id: number): Promise <any> {

    return this.http.get(this.apiUrl + id).toPromise();

   }

   // ready to test
    deleteStudent(id: number): Promise <any> {
      return this.http.delete(this.apiUrl + id).toPromise();

   }


}
