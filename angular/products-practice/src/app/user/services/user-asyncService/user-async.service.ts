import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserAsyncService {
  redirectUrl: string;

  private apiUrl = 'http://utn2019-avanzada2-tp9.herokuapp.com';

  constructor(private http: HttpClient) { }

  login(user: any): Observable <any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiUrl + '/login', user, httpOptions);
  }

  signUp(user: any): Observable <any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiUrl + '/sign-up', user, httpOptions);
  }

  getIdentitiesByUser(email: any): Observable <any> {

    return this.http.get(this.apiUrl + '/users/identities', email);
  }

}
