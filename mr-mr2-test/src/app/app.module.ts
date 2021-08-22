import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MrMr2Module } from 'projects/mr-mr2/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MrMr2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
