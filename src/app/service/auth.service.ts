import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false); // Estado inicial: no autenticado
  
  get isLoggedIn() {
    return this.loggedIn.asObservable(); // Observable para el estado de autenticación
  }

  userLoggedIn() {
    this.loggedIn.next(true); // Cambia el estado a autenticado
  }

  userLoggedOut(): void {
    this.loggedIn.next(false); // Cambia el estado a no autenticado
  }


  constructor() { }
}
