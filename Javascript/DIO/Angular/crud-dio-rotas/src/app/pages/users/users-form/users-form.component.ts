import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm : FormGroup
  constructor(private fb: FormBuilder) { 
    this.userForm = this.fb.group({
      id:0,
      nome:'',
      sobrenome:'',
      idade:0,
      profissao:''
    })
  }

  ngOnInit(): void {
  }

  createUser(){
    console.log(this.userForm.value);
    
    
  }
}
