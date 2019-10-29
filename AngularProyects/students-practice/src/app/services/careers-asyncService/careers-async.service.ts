import { Injectable } from '@angular/core';
import { Career } from 'src/app/models/career';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CareerAsyncService {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/careers/';

  constructor(private http: HttpClient) { }

  // ready for test
    addCareer(career: any): Promise <any> {
        const httpOptions = {
          headers : new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        return this.http.post(this.apiUrl, career, httpOptions).toPromise();
    }

    // ready for test
    modifyCareer(career: any, id: number): Promise <any> {
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.patch(this.apiUrl + id, career, httpOptions).toPromise();
    }

    getCareers(): Promise <any> {
      return this.http.get(this.apiUrl).toPromise();
   }


   getCareerById(id: number): Promise <any> {

    return this.http.get(this.apiUrl + id).toPromise();

   }

    deleteCareer(id: number): Promise <any> {
      return this.http.delete(this.apiUrl + id).toPromise();

   }

}