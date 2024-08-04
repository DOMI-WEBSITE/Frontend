import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { CommonModule, ɵnormalizeQueryParams } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Profesional } from '../interfaces/profesional';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() profesional!: Profesional;

  ngOnInit(): void {
    // console.log('Datos recibidos en ComponenteB:', this.data);
  }

  myForm!: FormGroup;
  constructor(private router: Router) { }

  verProfesional(idUsuario: any) {
    this.router.navigate(['/profile'], { queryParams: { id: idUsuario } })
  }

}