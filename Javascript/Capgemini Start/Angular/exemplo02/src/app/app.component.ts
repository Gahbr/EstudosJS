import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nome:string  = "Passarosuke";
 imagem: string = "https://i.guim.co.uk/img/media/6babb492bb98371fbd0d0d750c3e7c9d6b26662a/0_886_5128_3081/master/5128.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=544ecc2c64b5bfa27740707dc44e36eb"
 valor1: number = 1;
 valor2: number = 2;

mensagem(){
  let myContainer = document.querySelector("h2") as HTMLElement;
  myContainer.innerHTML = "Olá mundo";
}
  
//objeto
 pessoa : any ={
   nome: "Birb Lord",
   idade: 90,
   cidade: "Brasilia"
 }
 
 }

