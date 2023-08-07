import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../modules/shared/types/login-user.types';
import { User } from '../modules/shared/types/user.types';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken!: string;
  constructor(private http: HttpClient, private router: Router) {
  }

  getUserProfile(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/auth/profile`);
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, <LoginUser>({ username: username, password: password }))
      .pipe(map(data => {
        if (data.access_token) {
          this.accessToken = data.access_token;
          localStorage.setItem('accessToken', data.access_token);
        }
      }));
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigateByUrl('');
  }

}