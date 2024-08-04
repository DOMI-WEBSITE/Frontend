import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ NavBarComponent, FooterComponent,RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder,private loginService: LoginService, private router: Router, private authService: AuthService){
    this.myForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }


  login(form: FormGroup){
      this.loginService.login(form.value)
        .subscribe( {
          next: () => {
            // Navegar a otra ruta después de un inicio de sesión exitoso
            this.router.navigate(['/professionals']);
            this.authService.userLoggedIn();
          },
          error: () => {
            // Manejar errores de inicio de sesión
            this.errorMessage = 'Credenciales invalidas';
            console.log("Credenciales invalidas")
          }
          
        }
      );
  }

}
