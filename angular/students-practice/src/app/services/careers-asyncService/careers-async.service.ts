import { Injectable } from '@angular/core';
import { Career } from 'src/app/models/career';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CareerAsyncService {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/careers/';

  constructor(private http: HttpClient) { }


    getCareers(): Promise <any> {
      return this.http.get(this.apiUrl).toPromise();
   }


   getCareerById(id: number): Promise <any> {

    return this.http.get(this.apiUrl + id).toPromise();

   }

}
