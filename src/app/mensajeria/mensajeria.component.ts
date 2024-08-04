import { Component } from '@angular/core';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-mensajeria',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './mensajeria.component.html',
  styleUrl: './mensajeria.component.css'
})
export class MensajeriaComponent {

}
