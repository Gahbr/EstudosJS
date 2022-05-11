import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiResponse = [
  info:{},
  results:{}
]

@Injectable({
  providedIn: 'root'
})
export class ListService {

  apiUrl= 'https://rickandmortyapi.com/api/character'
  constructor(private httpClient : HttpClient) { }

  getList(): Observable<ApiResponse[]>{
    return this.httpClient.get<ApiResponse[]>(this.apiUrl)
  }
}
