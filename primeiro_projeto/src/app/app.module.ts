import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';
import { Projeto2Component } from './components/projeto2/projeto2.component';
import { BindingDeClassesComponent } from './binding-de-classes/binding-de-classes.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OuputPropertyComponent } from './ouput-property/ouput-property.component';




@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    Projeto2Component,
    BindingDeClassesComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    InputPropertyComponent,
    OuputPropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CursosModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
