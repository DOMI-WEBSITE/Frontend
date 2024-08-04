import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CardComponent } from '../card/card.component';
import { ServicioProfesionService } from '../service/servicio-profesion.service';
import { Profesional } from '../interfaces/profesional';
import { FiltrarPorDireccionPipe } from "../pipes/filtrar-por-direccion.pipe";
import { FormsModule } from '@angular/forms';
import { FiltrarPorServiciosPipe } from "../pipes/filtrar-por-servicios.pipe";

@Component({
    selector: 'app-professionals',
    standalone: true,
    templateUrl: './professionals.component.html',
    styleUrl: './professionals.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent, CardComponent, CommonModule, FormsModule, FiltrarPorDireccionPipe, FiltrarPorServiciosPipe]
})

export class ProfessionalsComponent {
  profesional: Profesional[] = [];

  filterDireccion = '';
  filterServicios = '';

  constructor(private servicioProfesion: ServicioProfesionService) { }

  ngOnInit(): void {
    this.getServiciosProfesional();
  }

  getServiciosProfesional(){
    this.servicioProfesion.getServiciosProfesionales().subscribe(data => {
      this.profesional = data;
      console.log(this.profesional);
    },
    error => {
      console.error('Error al obtener los datos:', error);
    });
  }
}