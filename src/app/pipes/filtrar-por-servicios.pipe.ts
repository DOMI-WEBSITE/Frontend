import { Pipe, PipeTransform } from '@angular/core';
import { Profesional } from '../interfaces/profesional';

@Pipe({
  name: 'filtrarPorServicios',
  standalone: true
})
export class FiltrarPorServiciosPipe implements PipeTransform {

  transform(profesionales: Profesional[], buscar: String=""): Profesional[] {
    const resul =[];
    for(const p of profesionales){
        if(p.servicios!.toLowerCase().indexOf(buscar.toLowerCase())>-1){
            resul.push(p);
        }
    }
    return resul;
  }

}
