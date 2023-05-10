import { ModalUsuarioComponent } from './../modal-usuario/modal-usuario.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from './../../auth/services/usuario.service';
import { Usuario } from './../../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.usuarios = [];
    this.listarTodos();
  }
  listarTodos(): Usuario[] {
    this.usuarioService.listarTodos().subscribe({
      next: (data: Usuario[]) => {
        if (data == null) {
          this.usuarios = [];
        } else {
          this.usuarios = data;
        }
      },
    });

    return this.usuarios;
  }

  remover($event: any, usuario: Usuario): void {
    $event.preventDefault();
    if (confirm('Deseja realmente remover o usuário ' + usuario.nome + ' ?')) {
      this.usuarioService.remover(usuario.id!).subscribe({
        complete: () => {
          this.listarTodos();
        },
      });
    }
  }

  abrirModal(usuario: Usuario): void {
    const modalRef = this.modalService.open(ModalUsuarioComponent);
    modalRef.componentInstance.usuario = usuario;
  }
}
