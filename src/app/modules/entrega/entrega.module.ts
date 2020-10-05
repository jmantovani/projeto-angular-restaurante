import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregaContainerComponent } from './entrega-container/entrega-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EntregaContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  //O que você deseja expor para outros módulos
  exports: [
    EntregaContainerComponent,
  ]
})
export class EntregaModule { }
