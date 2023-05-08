import { ServiceService } from './../../services/service.service';
import { Estado } from 'src/app/shared';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css'],
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;
  constructor(
    private estadoService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorId(id);
    if (res !== undefined) this.estado = res;
    else throw new Error('Estado não encontrada: id= ' + id);
  }

  atualizar() {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
