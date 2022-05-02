import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  count : number = 0;
  text : string = '';
  pessoas = [
    {
    nome:'Lorde',
    sobrenome: 'Passaro',
    },
    {
    nome:'Para',
    sobrenome: 'Keet',
    },
    {
      nome:'Nameless',
      sobrenome: 'Birb',
      },
]

  nome = this.pessoas[0].nome;

  constructor (){}

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++
      if(this.count == 10){
        clearInterval(interval);
      }
    },1000)

    console.log(this.pessoas[0]);
    
  }

   clicou(nome: string): void{
    console.log("Clicou em mim", nome);
      
  }
  }

