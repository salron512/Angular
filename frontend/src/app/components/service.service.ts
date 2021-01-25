import { Albuns } from './lista-albuns/albuns.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  baseUrl ="https://lista-albuns-default-rtdb.firebaseio.com/albuns.json"

  constructor(private http: HttpClient) { }


  recuperaLista(): Observable<Albuns[]>{
    return this.http.get<Albuns[]>(this.baseUrl)
  }
}
