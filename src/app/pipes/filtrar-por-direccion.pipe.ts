import { Pipe, PipeTransform } from '@angular/core';
import { Profesional } from '../interfaces/profesional';

@Pipe({
  name: 'filtrarPorDireccion',
  standalone: true
})
export class FiltrarPorDireccionPipe implements PipeTransform {

  transform(profesionales: Profesional[], buscar:string=""):Profesional[] {
    const resul =[];
    for(const p of profesionales){
        if(p.direccionProfesional!.toLowerCase().indexOf(buscar.toLowerCase())>-1){
            resul.push(p);
        }
    }
    return resul;
  }

}
