import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './diretiva/ng-if/ng-if.component';
import { SwitchCaseComponent } from './diretiva/switch-case/switch-case.component';
import { NgForComponent } from './diretiva/ng-for/ng-for.component';
import { NgClassComponent } from './diretiva/ng-class/ng-class.component';
import { NgStyleComponent } from './diretiva/ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { OperadorElvisComponent } from './diretiva/operador-elvis/operador-elvis.component';
import { NgContentComponent } from './diretiva/ng-content/ng-content.component';
import { FundoAmareloDirective } from './diretiva/shared/fundo-amarelo.directive';
import { DiretivasCustumizadasComponent } from './diretiva/diretivas-custumizadas/diretivas-custumizadas.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    SwitchCaseComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustumizadasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
