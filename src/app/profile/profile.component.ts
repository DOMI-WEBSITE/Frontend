import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { APIrestService } from '../service/form-request.service';
import { CommonModule } from '@angular/common';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileServicesComponent } from '../profile-services/profile-services.component';
import { Location } from '@angular/common';
import { ServicioProfesionService } from '../service/servicio-profesion.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiciosProfesional } from '../interfaces/servicios-profesional';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent, ProfileServicesComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent {
  
  perfil!: ServiciosProfesional;
  servicios: ServiciosProfesional[]=[];

  constructor(private servicioProfesion: ServicioProfesionService, private location: Location,private router:Router, private route: ActivatedRoute ) { 
    
  }
  ngOnInit(): void {
    // this.showData();

    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.servicioProfesion.getServicioProfesionalId(id).subscribe(data => {
            this.perfil = data[0];
            this.servicios = data;

            // Cambiar la URL para no mostrar el parámetro de consulta
            this.router.navigate(['/profile'], { replaceUrl: true });
            console.log('Obteniendo el perfil ',this.perfil);
        });
      }
    
    });
  }


goBack() {
  this.location.back();
}
  

}
