import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from './../../shared/models/endereco.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.css'],
})
export class ModalEnderecoComponent implements OnInit {
  @Input() endereco!: Endereco;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
