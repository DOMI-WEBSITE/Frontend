import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { Location } from '@angular/common';

// pages components
import { NavBarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-pageNotFound',
  standalone: true,
  imports: [ NavBarComponent, FooterComponent,RouterOutlet, RouterLink, RouterLinkActive ],
  templateUrl: './pageNotFound.component.html',
  styleUrl: './pageNotFound.component.css'
})
export class PageNotFoundComponent {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();}

}
