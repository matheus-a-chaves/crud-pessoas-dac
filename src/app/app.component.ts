import { Usuario } from './shared/models/usuario.model';
import { LoginService } from './auth/services/login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router, private loginService: LoginService) {}

  get usuarioLogado(): Usuario {
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
