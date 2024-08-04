import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioProfesionService } from '../service/servicio-profesion.service';
import { ServiciosProfesional } from '../interfaces/servicios-profesional';
import { SolicitudService } from '../service/solicitud.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Solicitud } from '../interfaces/solicitud';

@Component({
  selector: 'app-profile-services',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './profile-services.component.html',
  styleUrl: './profile-services.component.css'
})
export class ProfileServicesComponent {

  @Input() servicios!: ServiciosProfesional;

  myForm!: FormGroup;
  solicitud!: Solicitud;


  ngOnInit(): void {
    console.log('Onteniendo los servicios ', this.servicios);
    this.formulario();

    this.myForm.patchValue({
      idServicioProfesion: this.servicios.idServicioProfesion
    });
  }

  constructor(private fb: FormBuilder, private servicioProfesion: ServicioProfesionService, private solicitudService: SolicitudService) { }

  formulario() {
    this.myForm = this.fb.group({
      idSolicitud: [this.solicitud?.idSolicitud || ''],
      idServicioProfesion: [this.solicitud?.idServicioProfesion || ''],
      mensaje: [this.solicitud?.mensaje || '']
    });
  }

 

  enviarSolicitud(form: FormGroup) {
    if (this.myForm.valid) {
      if (form.value.id && form.value.id !== 0) {
        return;
      }
      this.solicitudService.enviarSolicitud(form.value).subscribe(data => {
        console.log('Solicitud enviada ', data);
      }
      )
    }
    else {
      console.log('Error al enviar la solicitud');
    }
  }

}
