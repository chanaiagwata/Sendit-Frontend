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
  loginUsers(userData:any): Observable<any>{
      return this.http.post('https://sendit-backed.herokuapp.com/api/login', userData);
    }
  
  isLoggedIn() {

    return !!localStorage.getItem('token');
      // const token = localStorage.getItem('token'); // get token from local storage
      // const payload = atob(token!.split('.')[1]); // decode payload of token
      // const parsedPayload = JSON.parse(payload); // convert payload into an Object
  
      // return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  
    }
    
  }
 
  

