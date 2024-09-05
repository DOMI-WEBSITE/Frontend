import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ProfileServicesComponent } from '../profile-services/profile-services.component';
import { ServiciosContratadosCardComponent } from '../servicios-contratados-card/servicios-contratados-card.component';
import { UpdateAccountComponent } from '../update-account/update-account.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [ RouterOutlet, RouterLink, RouterLinkActive, NavBarComponent, FooterComponent, ProfileServicesComponent, ServiciosContratadosCardComponent ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
