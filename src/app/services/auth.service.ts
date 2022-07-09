import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }
  login(data: any):Observable<any>{
    return this.http.post(`${BASE_URL}/login`, data)
  }

  logout(data: any):Observable<any>{
    return this.http.post(`${BASE_URL}/logout`, data)
  }

  registerUser(userData:any): Observable<any>{
      return this.http.post(`${BASE_URL}/client`, userData);
    }
  registerAdmin(userData:any): Observable<any>{
      return this.http.post(`${BASE_URL}/admin`, userData);
    }
  }
