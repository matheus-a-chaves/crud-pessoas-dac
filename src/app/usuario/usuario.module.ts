import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from './../shared/shared.module';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirEditarUsuarioComponent } from './inserir-editar-usuario/inserir-editar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { ModalUsuarioComponent } from './modal-usuario/modal-usuario.component';

@NgModule({
  declarations: [
    InserirEditarUsuarioComponent,
    ListarUsuarioComponent,
    ModalUsuarioComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
})
export class UsuarioModule {}
