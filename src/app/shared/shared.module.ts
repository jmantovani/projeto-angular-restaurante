import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CardApresentacaoComponent } from './components/card-apresentacao/card-apresentacao.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HorarioFuncionamentoApresentacaoComponent } from './components/horario-funcionamento-apresentacao/horario-funcionamento-apresentacao.component';
import { EnderecoApresentacaoComponent } from './components/endereco-apresentacao/endereco-apresentacao.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { TelefoneApresentacaoComponent } from './components/telefone-apresentacao/telefone-apresentacao.component';
import { FechadoDirective } from './directives/fechado.directive';
import { FechadoPipe } from './pipes/fechado.pipe';
import { FavoritosApresentacaoComponent } from './components/favoritos-apresentacao/favoritos-apresentacao.component';

@NgModule({
  declarations: [
    CardApresentacaoComponent,
    FavoritosApresentacaoComponent,
    HorarioFuncionamentoApresentacaoComponent,
    EnderecoApresentacaoComponent,
    TelefoneApresentacaoComponent,
    OrderByPipe,
    FechadoDirective,
    FechadoPipe,
  ],
  imports: [CommonModule, TranslateModule, MatExpansionModule],
  exports: [
    CommonModule,
    TranslateModule,
    CardApresentacaoComponent,
    FavoritosApresentacaoComponent,
    HorarioFuncionamentoApresentacaoComponent,
    EnderecoApresentacaoComponent,
    TelefoneApresentacaoComponent,
    OrderByPipe,
   // FechadoDirective
  ]
})
export class SharedModule {}
