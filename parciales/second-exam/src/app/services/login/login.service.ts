import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'http://utn2019-avanzada2-parcial2.herokuapp.com/';
  private loginPath = 'login';

  httpOptions: {};
  redirectUrl: string;
  tokenValue = new Subject();

  constructor(private http: HttpClient) {
  }

  set setToken(token) {
    this.tokenValue.next(token); // this will make sure to tell every subscriber about the change.
    localStorage.setItem('token', token);
  }

  get getToken() {
    return localStorage.getItem('token');
  }

  login(user: User): Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http
      .post(this.apiURL + this.loginPath, user, this.httpOptions);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.tokenValue.next();
  }
}
