import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CidadeService } from './services/cidade.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { ModalCidadeComponent } from './modal-cidade/modal-cidade.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    InserirCidadeComponent,
    EditarCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
  ],
  providers: [CidadeService],
})
export class CidadeModule {}
