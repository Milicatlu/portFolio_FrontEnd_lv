import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL= 'https://backendlv.onrender.com/skill/';
  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.HttpClient.get<Skill[]>(this.URL+ 'lista');
  } 
  public detail(id: number): Observable<Skill>{
    return this.HttpClient.get<Skill>(this.URL+ `detail/${id}`);
  }
  public save(skill: Skill): Observable<any>{
    return this.HttpClient.post<any>(this.URL+ 'create', skill);
  }
  public update(id:number, skill: Skill): Observable<any>{
    return this.HttpClient.put<any>(this.URL+ `update/${id}`, skill);
  }
  public delete(id:number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL+ `delete/${id}`);
  }
}
