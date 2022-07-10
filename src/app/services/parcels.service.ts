import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { PostParcel, Parcel } from 'src/app/parcel'


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

  getParcels():Observable<Parcel[]>{
    return this.http.get<Parcel[]>(`${BASE_URL}/parcel`)
  }

  addParcel(parcel:PostParcel):Observable<PostParcel>{
    return this.http.post<PostParcel>(`${BASE_URL}/parcel`,  parcel, httpOptions)
  }

}
