import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }
  getPeople(): Observable<any>{
    let peopleArray = [{
      firstName:'Passaro',
      lastName:'suke',
      age:10
    },
    {
      firstName:'Ching',
      lastName:'Cheng',
      age:50
    },
    {
      firstName:'Para', 
      lastName:'keet',
      age:2
    },
    {
      firstName:'Nameless',
      lastName:'Birb',
      age:69
    },
  ]
    return of()
  }
}
