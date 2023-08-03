import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, config, map } from 'rxjs';
import { User } from '../modules/shared/types/user.types';
import { environment } from 'src/environments/environment';
import { LoginUser } from '../modules/shared/types/login-user.types';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  // private currentUserSubject!: BehaviorSubject<User | null>;
  // public currentUser!: Observable<User | null>;
  // userProfile!: User;
  accessToken!: string;
  constructor(private http: HttpClient, private router: Router) {
    // const currentUserFromStorage = localStorage.getItem('currentUser');
    // if (currentUserFromStorage) {
    //   this.currentUserSubject = new BehaviorSubject<User | null>(JSON.parse(currentUserFromStorage));
    //   this.currentUser = this.currentUserSubject.asObservable();
    // }

  }

  // public get currentUserValue(): User | null {
  //   return this.currentUserSubject.value;
  // }

  ngOnChanges(): void {
    
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