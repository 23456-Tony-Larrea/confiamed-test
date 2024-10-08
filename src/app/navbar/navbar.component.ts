import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
  verMascotas() {
    this.router.navigate(['/ver-mascotas']);
  }

  verUsuarios() {
    this.router.navigate(['/ver-usuarios']);
  }
}
