import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'; 
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

export class NavBarComponent {
  isAuthenticated: boolean = false;

constructor(private authService: AuthService){}

ngOnInit(): void {
  this.authService.isLoggedIn.subscribe(loggedIn => {
    this.isAuthenticated = loggedIn;
  });
}

}
