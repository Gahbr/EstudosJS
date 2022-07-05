import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Pessoa } from './components/Pessoa';

function App() {
 let list = [
  {name:"Birb" , age:90},
  {name:"Birbowski" , age:41},
  {name:"Passarosuke" , age:63},
  {name:"Keetson" , age:3},

 ];
 
  return (
   <div>
     <h2>Lista de presença</h2>
     <ul>
      {list.map((item, index)=>(
        <Pessoa key={index} data={item}/>
      ))}
     </ul>
   </div>
  )
}

export default App;
