import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularAulas';
  // nomes = ['Passarosuke', 'Kakashi', 'Naruto', 'Sasuke'];
  
  nomes = [
    new Pessoa(1, 'BirbLord', 69),
    new Pessoa(2, 'Passarosuke', 90),
    new Pessoa(3, 'Kakashi', 30),
    new Pessoa(4, 'Naruto', 40),
    new Pessoa(5, 'Sasuke', 10),
    new Pessoa(6, 'Konan', 50)
  
  ];
  nomePrincipal = this.nomes[0];
}
