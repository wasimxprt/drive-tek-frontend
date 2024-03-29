import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from '../../_models/jwt-response';
import { AuthLoginInfo } from '../../_models/login-info';
import { SignUpInfo } from '../../_models/sigup-info';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', credentials, httpOptions);
  }

  register(user): Observable<any> {

    let role = { role: ["ROLE_ADMIN"] };
    let username = { username: user.email };
    const newUser = { ...user, ...role, ...username };    

    return this.http.post(AUTH_API + 'signup', newUser, httpOptions);
  }
}
