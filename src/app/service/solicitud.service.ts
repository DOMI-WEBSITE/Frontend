import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solicitud } from '../interfaces/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private backendUrl = 'http://localhost:8095/api/solicitud'

  constructor(private httpClient: HttpClient) { }

  enviarSolicitud(solicitud: Solicitud){
    return this.httpClient.post<Solicitud>(`${this.backendUrl}`, solicitud);
  }
}
