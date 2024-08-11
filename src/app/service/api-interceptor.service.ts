import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.loginService.getToken();

    let clonedRequest = req;
    if (token) {
      clonedRequest = req.clone({
        headers: req.headers
          .set('Authorization', `Bearer ${token}`)// para todo los enpoit que estan protegidos
          .set('token', token) // para los enpoit que necesitan el token en los RequestHeader
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Si el token ha expirado o es inválido, redirigir a la página de inicio de sesión
          // this.loginService.logout(); //desactivado para evitar mostrar login cuandoe error en professionals
          // this.router.navigate(['/login']); //desactivado para evitar mostrar login cuandoe error en professionals
        }
        // Retornar un observable vacío para evitar mostrar el error en la consola
        return throwError(() => new Error('Unauthorized'));
      })
    );

    
    
  }
}
