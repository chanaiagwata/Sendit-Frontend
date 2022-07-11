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

  registerUser(userData:any): Observable<any>{
      return this.http.post('https://sendit-backed.herokuapp.com/api/client', userData);
    }
  registerAdmin(userData:any): Observable<any>{
      return this.http.post('https://sendit-backed.herokuapp.com/api/admin', userData);
    }
  loginUsers(userData:any): Observable<any>{
      return this.http.post('https://sendit-backed.herokuapp.com/api/login', userData);
    }
  
  isLoggedIn() {
      const token = localStorage.getItem('token'); // get token from local storage
      const payload = atob(token!.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object
  
      return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  
    }
  
  }
 
  

