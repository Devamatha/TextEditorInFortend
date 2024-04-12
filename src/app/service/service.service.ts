import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../envirolnment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getById(id: any): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/text/${id}`);
  }

  getall(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}api/text/getall`);
  }
}
