import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from '../../shared';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-usuario',
  templateUrl: './modal-usuario.component.html',
  styleUrls: ['./modal-usuario.component.css'],
})
export class ModalUsuarioComponent implements OnInit {
  @Input() usuario: Usuario = new Usuario();

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
