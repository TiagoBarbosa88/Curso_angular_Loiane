import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './diretiva/ng-if/ng-if.component';
import { SwitchCaseComponent } from './diretiva/switch-case/switch-case.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    SwitchCaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
