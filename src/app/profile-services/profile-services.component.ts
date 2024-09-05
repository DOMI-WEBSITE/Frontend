import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioProfesionService } from '../service/servicio-profesion.service';

@Component({
  selector: 'app-profile-services',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './profile-services.component.html',
  styleUrl: './profile-services.component.css'
})
export class ProfileServicesComponent {

  ngOnInit(): void {
  }

constructor() {}

}
