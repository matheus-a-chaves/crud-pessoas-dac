import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Login } from './../../shared/models/login.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.loginService.usuarioLogado) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.message = params['error'];
    });
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((usu) => {
        if (usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate(['/home']);
        } else {
          this.loading = false;
          this.message = 'Usuário/Senha inválidos.';
        }
      });
    }
  }
}
