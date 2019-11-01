import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAsyncService {

  private apiUrl = 'http://utn2019-avanzada2-tp8.herokuapp.com/';

  constructor(private http: HttpClient) { }

  login(user: any): Promise <any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiUrl + '/login', user, httpOptions).toPromise();
  }

  signUp(user: any): Promise <any> {
    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiUrl + '/sign-up', user, httpOptions).toPromise();
  }

  getIdentitiesByUser(email: any): Promise <any> {

    return this.http.get(this.apiUrl + '/users/identities', email).toPromise();
  }

}
