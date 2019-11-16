import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://utn2019-avanzada2-tp9.herokuapp.com/api/products/';

  constructor(private http: HttpClient) { }
}
