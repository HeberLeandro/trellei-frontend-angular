import { Inject, Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(@Inject(HttpClient) private http: HttpClient) { }
  API_URL_BASE: string = 'https://trellei-backend.onrender.com/api/v1/';

  // O método recebe a Interface e faz o POST para o backend
  login(credentials: LoginCredentials) {
    return this.http.post(`${this.API_URL_BASE}auth/authenticate`, credentials);
  }

}
