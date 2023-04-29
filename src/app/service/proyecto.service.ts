import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = 'https://backendlv.onrender.com/proyecto/';
  constructor(private httpclient: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.httpclient.get<Proyecto[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Proyecto> {
    return this.httpclient.get<Proyecto>(this.URL + `detail/${id}`);
  }
  
  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpclient.put<any>(this.URL +`update/${id}`, proyecto);
  }
  public delete(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.URL +  `delete/${id}`);
  }
  public save(proyecto: Proyecto): Observable<any>{
    return this.httpclient.post<any>(this.URL +'create', proyecto);
  }
}
