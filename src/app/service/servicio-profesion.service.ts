import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiciosProfesional } from '../interfaces/servicios-profesional';
import { HttpHeaders } from '@angular/common/http';
import { Profesional } from '../interfaces/profesional';

@Injectable({
  providedIn: 'root'
})
export class ServicioProfesionService {

  //private backendUrl = 'https://domi-production.up.railway.app/api/servicio-profesion'
  private backendUrl = 'http://localhost:8095/api/servicio-profesion'

  constructor(private httpClient: HttpClient) { }

  

  getServiciosProfesionales(): Observable<Profesional[]>{
    //const headers = this.getHeaders();
    return this.httpClient.get<Profesional[]>(`${this.backendUrl}`);
  }

  getServicioProfesionalId(id: any): Observable<ServiciosProfesional[]>{
    return this.httpClient.get<ServiciosProfesional[]>(`${this.backendUrl}/${id}`)
  }
}