import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private backendUrl = `${environment.APIURL}/auth/registro`;

  constructor(private httpClient: HttpClient) { }

  registre(registro: Registro){
    return this.httpClient.post<Registro>(`${this.backendUrl}`, registro);
  }
}