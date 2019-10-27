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
    addCareer(Career: Career): Promise <any> {
        const httpOptions = {
          headers : new HttpHeaders({
            'Content-Type': 'application/json'
          })
        };
        return this.http.post(this.apiUrl, Career, httpOptions).toPromise();
    }

    // ready for test
    modifyCareer(Career: Career, id: number): Promise <any> {
      console.log(Career);
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      return this.http.patch(this.apiUrl + id, Career, httpOptions).toPromise();
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
