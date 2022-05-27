import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
apiUrl = // 'https://sheet.best/api/sheets/96f9f480-61a2-4761-bedd-dd790416a34c'
  constructor(private httpClient : HttpClient) { }

  //retorna a lista de usuarios
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }

}
