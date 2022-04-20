import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

 //URL Base
  url = "http://127.0.0.1/api/php/";

  //Vetor de cursos
  vetor: Curso[] = [];


  //Objeto da classe curso
  curso = new Curso();
  
  //construtor
  constructor(private curso_servico: CursoService) { }

  ngOnInit() {
    //ao iniciar o sistema
    this.selecao();
  }

  //Cadastro
  cadastro(){
   this.curso_servico.cadastrarCurso(this.curso).subscribe(
     (res:Curso[]) =>{
      this.vetor = res;
      this.curso.nomeCurso = null;
      this.curso.valorCurso = null;

      this.selecao();
    }
   )
  }

  //Selecao
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res : Curso[]) =>{
        this.vetor  = res;
      }
    ) 
}

  //Alterar
  alterar(): void{
    alert('alterar');
}
  //remover
  remover(): void{
    alert('remover');
}

  }
