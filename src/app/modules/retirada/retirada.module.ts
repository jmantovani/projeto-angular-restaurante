import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetiradaContainerComponent } from './retirada-container/retirada-container.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RetiradaContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RetiradaContainerComponent
  ]
})
export class RetiradaModule { }
