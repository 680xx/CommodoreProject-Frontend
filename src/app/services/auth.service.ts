import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TOKEN_KEY} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseURL = 'http://localhost:5074/api';

  createUser(formData:any) {
    return this.http.post(this.baseURL + '/signUp', formData);
  }

  signIn(formData:any) {
    return this.http.post(this.baseURL + '/signIn', formData);
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN_KEY) != null?true:false;
  }
}
