import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

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
      firstName:'',
      lastName:'',
      age: 0 
    }
  ];

  //nome = this.pessoas[0].nome;

  constructor (private peopleService: PeopleService){}

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++
      this.getPeople();
      if(this.count == 10){
        clearInterval(interval);
      }
   
    },1000)

    console.log(this.pessoas[0]);
    
  }

   clicou(nome: string): void{
    console.log("Clicou em mim", nome);
      
  }
  getPeople(){
    this.peopleService.getPeople().subscribe(people =>{
      this.pessoas = people
    })
  }

}

