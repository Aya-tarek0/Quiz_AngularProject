import { JwtDecodeOptions } from './../../../../node_modules/jwt-decode/build/cjs/index.d';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import {Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any;
  private baseUrl = 'http://localhost:5183';
  constructor(private http: HttpClient , private router : Router) {}

  register(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/Account/register`, userData);
  }
  login(userData: any): Observable<any>
  {
        return this.http.post(`${this.baseUrl}/api/Account/login`, userData);


  }
   saveUserData()
   {
    if(localStorage.getItem('userToken') != null)
    {
    this.userData = jwtDecode(localStorage.getItem('userToken')!);
    }
   }

   logout(): void {
  localStorage.removeItem('userToken');
  this.userData = null;
  this.router.navigate(['/login']);
}

}
