import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { parcelUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParcelsService {

  constructor(private http: HttpClient) { }

  getParcels(data: any):Observable<any>{
    return this.http.post(parcelUrl, data)
  }
}
