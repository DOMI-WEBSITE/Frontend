import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiciosUsuario } from '../interfaces/servicios-usuario';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({providedIn:'root'})

export class ServicioProfesionService {

  private backendUrl = (`${environment.APIURL}/api/servicio-profesion`)

  constructor(private httpClient: HttpClient) { }

  private datosObtenidos: { [key: string]: any } = {};

  data: any = {};

  private token: string = '';

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return this.token || localStorage.getItem('token') || '';
  }
  
  setData(key: string, value: any) {
    this.datosObtenidos[key] = value;
  }

  getData(key: string): any {
    return this.datosObtenidos[key];
  }

  private getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ´${this.getToken()}´'
    });
  }

  getServiciosProfesionales(): Observable<ServiciosUsuario[]>{
    const headers = this.getHeaders();
    return this.httpClient.get<ServiciosUsuario[]>(`${this.backendUrl}`, { headers });
  }

  getServicioProfesionalId(id: number){
    return this.httpClient.get<ServiciosUsuario>(`${this.backendUrl}/${id}`)
  }
}