import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';

import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEsMx from '@angular/common/locales/es-MX'; 

registerLocaleData(localeEsMx); // Registrar el locale

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    PokemonModalComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPaginatorModule // Agrega otros módulos de Material según sea necesario
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DatePipe,
    { provide: localeEsMx, useValue: 'es-MX' } // Establecer el locale por defecto
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
