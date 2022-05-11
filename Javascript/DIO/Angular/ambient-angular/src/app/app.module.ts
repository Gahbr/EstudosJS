import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {PeopleService} from './shared/services/people.service';
import { AppComponent } from './app.component';
import { MarcaTextoDirective } from './shared/directives/marca-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
