import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { RouterModule } from '@angular/router';
import { CoordinacionAcademicaComponent } from './routes/coordinacion-academica/coordinacion-academica.component';
import { ContratacionComponent } from './routes/coordinacion-academica/contratacion/contratacion.component';
import { InstructorComponent } from './routes/coordinacion-academica/instructor/instructor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CoordinacionAcademicaComponent,
    ContratacionComponent,
    InstructorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'navegador',component:NavComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
