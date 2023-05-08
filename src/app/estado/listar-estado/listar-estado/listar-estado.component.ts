import { ServiceService } from './../../services/service.service';
import { Estado } from 'src/app/shared';
import { Component, OnInit } from '@angular/core';
import { ModalEstadoComponent } from '../../modal-estado/modal-estado/modal-estado.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css'],
})
export class ListarEstadoComponent implements OnInit {
  estados: Estado[] = [];

  constructor(
    private estadoService: ServiceService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${estado.nome}?`)) {
      this.estadoService.remover(estado.id!);
      this.estados = this.listarTodos();
    }
  }
  abriModal(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }
}
