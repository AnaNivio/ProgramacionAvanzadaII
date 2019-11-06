import { Injectable } from '@angular/core';
import { Career } from 'src/app/models/career';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CareerServiceObservable {
  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/api/careers/';

  constructor(private http: HttpClient) { }

    getCareers(): Observable <any> {
      return this.http.get(this.apiUrl);
    }


    getCareerById(id: number): Observable <any> {

    return this.http.get(this.apiUrl + id);

    }


}
