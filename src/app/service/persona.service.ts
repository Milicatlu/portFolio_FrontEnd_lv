import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL= 'http://localhost:8080/personas/';

  constructor(private httpclient: HttpClient ) {}

  public lista(): Observable<Persona[]> {
    return this.httpclient.get<Persona[]>(this.URL + 'lista');
  }
  public detail(id: number): Observable<Persona> {
    return this.httpclient.get<Persona>(this.URL + `detail/${id}`);
  }
  
  public update(id: number, persona: Persona): Observable<any>{
    return this.httpclient.put<any>(this.URL +`update/${id}`, persona);
  }
  public getPersona(): Observable<Persona>{
    return this.httpclient.get<Persona>(this.URL+ 'traer/perfil');
  }


}
