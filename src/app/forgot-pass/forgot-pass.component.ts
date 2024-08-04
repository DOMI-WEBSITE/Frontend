import { Component } from '@angular/core';
import { NavBarComponent } from '../navbar/navbar.component';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [ NavBarComponent, RouterOutlet, RouterLink, RouterLinkActive, ],
  templateUrl: './forgot-pass.component.html',
  styleUrl: './forgot-pass.component.css'
})
export class ForgotPassComponent {

}
