import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginUrl, logoutUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }
  login(data: any):Observable<any>{
    return this.http.post(loginUrl, data)
  }

  logout(data: any):Observable<any>{
    return this.http.post(logoutUrl, data)
  }
}
