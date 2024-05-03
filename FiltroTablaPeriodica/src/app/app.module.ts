import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './filtros/filtros.component';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [
    AppComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    A11yModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
