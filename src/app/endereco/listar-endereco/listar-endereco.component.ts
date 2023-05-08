import { ModalEnderecoComponent } from './../modal-endereco/modal-endereco.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnderecoService } from './../services/endereco.service';
import { Endereco } from './../../shared/models/endereco.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css'],
})
export class ListarEnderecoComponent implements OnInit {
  enderecos: Endereco[] = [];
  constructor(
    private enderecoService: EnderecoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }
  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (
      confirm(
        `Deseja realmente remover esse endereço: ${
          endereco.rua +
          ', ' +
          endereco.numero +
          ', ' +
          endereco.cidade +
          ' - ' +
          endereco.estado
        }  ?`
      )
    ) {
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
  abriModal(endereco: Endereco) {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
}
