import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  baseurl=  "https://sendit-backed.herokuapp.com/api";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }
  getAllAdmins(): Observable<any>{
    return this.http.get(this.baseurl+'/adminprofiles', {headers: this.httpHeaders});
  }

  getSingleAdmin(id:number): Observable<any>{
    return this.http.get(this.baseurl+'/admin/' + id + '/', {headers: this.httpHeaders});
  }

  updateAdmin(admin:any): Observable<any>{
    const body = {profile_pic: admin.profile_pic, fullname:admin.fullname, organisation:admin.organisation, location:admin.location}
    return this.http.put(this.baseurl+'/admin/' + admin.id + '/', body,
      {headers: this.httpHeaders});
  }

  createAdmin(admin:any): Observable<any>{
    const body = {profile_pic: admin.profile_pic, fullname:admin.fullname, organisation:admin.organisation, location:admin.location }
    return this.http.post(this.baseurl+'/adminprofiles', body,{headers: this.httpHeaders});
  }

  deleteAdmin(id:any): Observable<any> {
    return this.http.delete(this.baseurl + '/admins/' + id + '/',
      {headers: this.httpHeaders});
  }

  getAllClient(): Observable<any>{
    return this.http.get(this.baseurl+'/clientsprofiles', {headers: this.httpHeaders});
  }

  getSingleClient(id:number): Observable<any>{
    return this.http.get(this.baseurl+'/client/' + id + '/', {headers: this.httpHeaders});
  }

  updateClient(client:any): Observable<any>{
    const body = {profile_pic: client.profile_pic, user:client.user, date_created:client.date_created, location:client.location}
    return this.http.put(this.baseurl+'/client/' + client.id + '/', body,
      {headers: this.httpHeaders});
  }

  createClient(client:any): Observable<any>{
    const body = {profile_pic: client.profile_pic, user:client.user, date_created:client.date_created, location:client.location}
    return this.http.post(this.baseurl+'/client', body,{headers: this.httpHeaders});
  }

  deleteClient(id:any): Observable<any> {
    return this.http.delete(this.baseurl + '/client/' + id + '/',
      {headers: this.httpHeaders});
  }
}
