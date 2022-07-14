import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import jwtDecode from 'jwt-decode'
import { BASE_URL } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = `https://sendit-backed.herokuapp.com/api`

  constructor(private http: HttpClient) { 

   }
     //stores decoded user data and access token in the local storage
  // private setSession(access_token:string){
  //   const payload = jwtDecode<jwtPayload>(access_token);
  //   const expitesAt = moment.unix(payload.exp)


  //   localStorage.setItem('access_token', access_token)
  //   localStorage.setItem('expiresAt', JSON.stringify(expitesAt.valueOf()))
  // }
  //getter method--> access token from local storage
  // get token(){
  //   return localStorage.getItem('access_token')
  // }

  // get tokenRefresh(){
  //   return localStorage.getItem('refresh_token')
  // }
  
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
      return this.http.post(`${BASE_URL}/login`, userData);
    }
  // logout() {  
  //     this.token = null;  
  //     this.isAuthenticated = false;  
  //   }    
  
  isLoggedIn() {

      const token = localStorage.getItem('token'); // get token from local storage
      const payload = atob(token!.split('.')[1]); // decode payload of token
      const parsedPayload = JSON.parse(payload); // convert payload into an Object
  
      return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  
    }
    // getCurrentUser(){
    //   const token = this.token
    //   const decordedUser = jwtDecode<jwtPayload>(token!)
    //   const userId = decordedUser.user_id
  
    //   return this.http.get<User>(`${this.BASE_URL}api/users/${userId}`)
    // }
  
    // getUserProfile(profileUrl:string){
    //   return this.http.get<Profile>(profileUrl)
    // } 
    
    
  }
 
  

