import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private backendUrl = 'https://domi-production.up.railway.app/auth/registro'

  constructor(private httpClient: HttpClient) { }

  registre(registro: Registro){
    return this.httpClient.post<Registro>(`${this.backendUrl}`, registro);
  }
}
