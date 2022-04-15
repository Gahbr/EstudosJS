import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  exibirTexto: boolean = false;

  //diretiva ngif
  acaoNgIf(){
   this.exibirTexto = !this.exibirTexto
  }

  //diretiva ngfor
  cursos = ["HTML & CSS", "PHP baśico", "PHP Avançado", "Angular"];

  //diretiva ngSwitch
  curso_selecionado = "Angular";

  //diretiva ngClass
  ligada: boolean = false;


}
