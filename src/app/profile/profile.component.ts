import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { APIrestService } from '../service/form-request.service';
import { Perfil } from '../interfaces/perfil';
import { CommonModule } from '@angular/common';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileServicesComponent } from '../profile-services/profile-services.component';
import { Location } from '@angular/common';
import { ServicioProfesionService } from '../service/servicio-profesion.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SolicitudService } from '../service/solicitud.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent, ProfileServicesComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  perfil: Perfil | undefined;

  constructor(private fb: FormBuilder, private servicioProfesion: ServicioProfesionService, private solicitudService: SolicitudService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.verProfesional(id);
    });
  }

  verProfesional(id: number) {
    this.servicioProfesion.getServicioProfesionalId(id).subscribe(
      (data: Perfil[]) => { 
        if (data.length > 0) {
          this.perfil = data[0];
          console.log("Datos del perfil recibidos:", this.perfil);
        } else {
          console.warn('No se encontró ningún perfil para el ID:', id);
        }
      },
      error => {
        console.error('Error al obtener el perfil', error);
      }
    );
  }
  
  goBack() {
    this.location.back();
  }
}