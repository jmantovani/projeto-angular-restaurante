import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntregaContainerComponent } from './modules/entrega/entrega-container/entrega-container.component';
import { RetiradaContainerComponent } from './modules/retirada/retirada-container/retirada-container.component';


const routes: Routes = [
  { path: 'entrega', component: EntregaContainerComponent},
  { path: 'retirada', component: RetiradaContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
