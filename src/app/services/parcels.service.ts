import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { PostParcel, Parcel} from 'src/app/parcel'


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  constructor(private http: HttpClient) { }

  getParcels(){
    return this.http.get(`${BASE_URL}/parcel`)
  }

  addParcel(body:PostParcel):Observable<PostParcel>{
    return this.http.post<PostParcel>(`${BASE_URL}/parcel/`, body, httpOptions)
  }

  updateParcel(parcel: any):Observable<any>{
    return this.http.put(`${BASE_URL}/parcel/${parcel.id}/`, parcel)
  }

  cancelParcel(parcel:any):Observable<any>{
    return this.http.delete<any>(`${BASE_URL}/parcel/${parcel.id}/`)
  }

}
