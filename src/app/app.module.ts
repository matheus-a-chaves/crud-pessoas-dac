import { CidadeModule } from './cidade/cidade.module';
import { EstadoModule } from './estado/estado.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { SharedModule } from './shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    SharedModule,
    NgbModule,
    EstadoModule,
    CidadeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
