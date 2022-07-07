import { useState } from 'react'
import './App.css'
import {Botao} from './components/Botao/'

const  App = () => {

  const [color, setColor] = useState('gray');
  const [padding, setPadding] = useState(0);

  const handleClick = ()=>{
    setColor("Green");
    setPadding(20);
  }

  return (
    <div>
      <button  onClick={handleClick} style={{backgroundColor: color , color:"white" ,border:0, padding}}>Clique aqui</button> 
     <Botao />
      
    </div>
  )
}

export default App;
