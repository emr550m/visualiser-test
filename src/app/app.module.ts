import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from '@backbase/ui-ang/button';
import { InputEmailModule } from '@backbase/ui-ang/input-email';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputEmailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
