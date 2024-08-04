//  Basics
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { APIrestService } from "../service/form-request.service";
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RegistroService } from '../service/registro.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {

  myForm!: FormGroup;

   constructor(private fb: FormBuilder, private registroService: RegistroService) {
    this.myForm = this.fb.group({
      id: [''],
      nombre: [''],
      apellidos: [''],
      username: [''],
      email: [''],
      password: [''],
      telefono: [''],
      direccion: [''],
      isProfesional: [false], 
      terminos: ['']
    });

  }

  registre(form: FormGroup){
    if (this.myForm.valid) {
      if (form.value.id && form.value.id !== 0) {
        return;
      }
      this.registroService.registre(form.value)
        .subscribe(data => {
          console.log('Registro exitoso! ',data);
        }
        )
    }
    else {
      console.log('Formulario inválido');
    }
  }


  registreProfesional(form: FormGroup){
    if (this.myForm.valid) {
      if (form.value.id && form.value.id !== 0) {
        return;
      }
      this.myForm.value.isProfesional=true;
      this.registroService.registre(form.value)
        .subscribe(data => {
          console.log('Registro exitoso! ',data);
        }
        )
    }
    else {
      console.log('Formulario inválido');
    }
  }



}
