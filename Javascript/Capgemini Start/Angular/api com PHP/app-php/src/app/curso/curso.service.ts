import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  //URL
  url = "http://127.0.0.1/api/php/";
  
  //vetor
  vetor !: Curso[] ;

  //construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url + "listar").pipe(
      map((res) =>{
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }

  //Cadastro de curso
  cadastrarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post(this.url+'cadastrar',{cursos:c}).pipe(
      map((res)=>{
        this.vetor.push(res['cursos']);
        return this.vetor
      })
    )



}





}