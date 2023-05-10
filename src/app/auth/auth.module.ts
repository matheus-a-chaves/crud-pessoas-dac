import { UsuarioService } from './services/usuario.service';
import { LoginService } from './services/login.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [LoginService, UsuarioService],
})
export class AuthModule {}
