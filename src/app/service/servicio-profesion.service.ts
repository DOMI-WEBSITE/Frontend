// servicio-profesion.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../interfaces/perfil';
import { ServiciosUsuario } from '../interfaces/servicios-usuario';
import { environment } from '../../environments/environment.development';

@Injectable({ providedIn: 'root' })
export class ServicioProfesionService {

  private backendUrl = `${environment.APIURL}/api/servicio-profesion`;

  private datosObtenidos: { [key: string]: any } = {};
  private token: string = '';

  constructor(private httpClient: HttpClient) { }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    if (typeof window !== 'undefined') {
      return this.token || localStorage.getItem('token') || '';
    }
    return this.token || '';
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
      'Authorization': `Bearer ${this.getToken()}`
    });
  }

  getServiciosProfesionales(): Observable<ServiciosUsuario[]> {
    const headers = this.getHeaders();
    return this.httpClient.get<ServiciosUsuario[]>(`${this.backendUrl}`, { headers });
  }

  getServicioProfesionalId(id: number): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(`${this.backendUrl}/${id}`);
  }
}