import { EditarEstadoComponent } from './estado/editar-estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado/listar-estado.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pessoas/listar',
    pathMatch: 'full',
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar',
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
  },
  {
    path: 'estados',
    component: ListarEstadoComponent,
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
  },
  {
    path: 'estados/novo',
    component: InserirEstadoComponent,
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarEstadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
