import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ServiceService } from './services/service.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado/listar-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado/inserir-estado.component';
import { ModalEstadoComponent } from './modal-estado/modal-estado/modal-estado.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    ListarEstadoComponent,
    EditarEstadoComponent,
    InserirEstadoComponent,
    ModalEstadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [ServiceService],
})
export class EstadoModule {}
