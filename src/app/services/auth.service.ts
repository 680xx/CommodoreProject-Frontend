import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TOKEN_KEY} from '../constants';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  createUser(formData:any) {
    return this.http.post(environment.apiBaseUrl + '/signUp', formData);
  }

  signIn(formData:any) {
    return this.http.post(environment.apiBaseUrl + '/signIn', formData);
  }

  isLoggedIn() {
    return localStorage.getItem(TOKEN_KEY) != null?true:false;
  }

  saveToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }
}
