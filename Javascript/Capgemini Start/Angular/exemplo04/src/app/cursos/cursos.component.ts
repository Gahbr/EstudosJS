import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit {

  //atributos
  public vetorCursos!: Curso[];
  public curso!: Curso;
  public id!: number;

  //construtor
  constructor(private servico:CursosService) { }

  ngOnInit()  {
    this.id = -1;
    this.curso =  new Curso();
    this.vetorCursos = this.servico.listar();
  }

  //cadastrar
  cadastrar(){
   this.servico.cadastrar(this.curso);
   this.curso = new Curso();
  }

  //excluir
  excluir(id:number){
    this.servico.excluir(id);
    this.id = -1;
}

//Editar
editar(id:number){
  this.id = id;

  this.curso = new Curso(
    this.vetorCursos[id].nomeCurso,
    this.vetorCursos[id].valorCurso,
    this.vetorCursos[id].areaCurso
    )
}

//atualizar
atualizar(){
  this.servico.alterar(this.id, this.curso);
  this.curso= new Curso();
  this.id = -1;

}
}