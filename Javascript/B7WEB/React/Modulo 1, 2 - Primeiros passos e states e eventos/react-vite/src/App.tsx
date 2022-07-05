import React, { useState } from "react";
import {Botao} from './components/Botao'
const App = ()=>{
   
   let textoDoBotao = "Clicar no botao"
   const botaoEventAction = (txt: string)=>{
      alert("Frase do app " + txt);
   }
   
    return (
     <div>
      <Botao text= {textoDoBotao} clickFn={botaoEventAction}/>
     </div>
    )
}

 export default App;

  