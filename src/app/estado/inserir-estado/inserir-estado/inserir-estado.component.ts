import { Router } from '@angular/router';
import { ServiceService } from './../../services/service.service';
import { Estado } from 'src/app/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css'],
})
export class InserirEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(private estadoService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserir(): void {
    console.log('--------------ASDAS');
    if (this.formEstado.form.valid) {
      this.estadoService.inserir(this.estado);

      this.router.navigate(['/estados']);
    }
  }
}
