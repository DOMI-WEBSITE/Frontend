import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServicioProfesionService } from '../service/servicio-profesion.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  
  @Input() data: any;

  ngOnInit(): void {
    // console.log('Datos recibidos en ComponenteB:', this.data);
  }

  myForm!: FormGroup;
constructor(private router: Router, private servicioProfesion: ServicioProfesionService) {}
  
  verProfesional(id: number) {
    this.servicioProfesion.getServicioProfesionalId(id).subscribe(data => {
      this.servicioProfesion.setData('perfil', data);
      this.router.navigate(['/profile']);
    })
  }

}