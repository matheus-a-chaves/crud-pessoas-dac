import { Router } from '@angular/router';
import { CidadeService } from './../services/cidade.service';
import { Cidade } from './../../shared/models/cidade.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css'],
})
export class InserirCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;
  cidade!: Cidade;
  constructor(private cidadeService: CidadeService, private router: Router) {}

  ngOnInit(): void {
    this.cidade = new Cidade();
  }

  inserir(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.inserir(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
