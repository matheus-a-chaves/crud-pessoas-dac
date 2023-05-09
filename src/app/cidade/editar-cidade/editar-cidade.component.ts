import { Estado } from './../../shared/models/estado.model';
import { ServiceService } from './../../estado/services/service.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadeService } from './../services/cidade.service';
import { Cidade } from './../../shared/models/cidade.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css'],
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];
  constructor(
    private cidadeService: CidadeService,
    private route: ActivatedRoute,
    private estadoService: ServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if (res !== undefined) this.cidade = res;
    else throw new Error('Cidade não encontrada: id= ' + id);
    this.estados = this.estadoService.listarTodos();
  }

  atualizar(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
