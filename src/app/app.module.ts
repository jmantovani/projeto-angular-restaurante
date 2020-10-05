import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { EntregaModule } from './modules/entrega/entrega.module';
import { RetiradaModule } from './modules/retirada/retirada.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatExpansionModule,
    SharedModule,
    CoreModule,
    EntregaModule,
    RetiradaModule
  ],
  exports: [MatExpansionModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
