import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://utn2019-avanzada2-parcial2.herokuapp.com/api/cars';

  constructor(private http: HttpClient) { }

  addCar(car: any): Observable <any> {
    const httpOptions = {
        headers : new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
    return this.http.post(this.apiUrl, car, httpOptions);
  }

  validateDomain(domain: string): Promise<any> {
    return this.http
      .get(this.apiUrl + 'cars/identities' + '?domain=' + domain).toPromise();
  }

  getCars(): Observable <any> {
    return this.http.get(this.apiUrl);
 }




}
