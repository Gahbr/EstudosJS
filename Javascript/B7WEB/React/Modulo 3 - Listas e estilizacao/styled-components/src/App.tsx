// import {Botao}from "./components/Botao";
// import { Container } from "./components/Container";
// import {Container, Botao} from './AppStyles'

import * as C from './AppStyles'



const App = ()=> {
  return (
    <C.Container bgColor = "beige"> 
    <span>texto do componente </span>
    <a href="" className='link'>Link qualquer |</a>
      <C.Botao bg="red">Botao grande</C.Botao>
      <C.Botao bg="darkgreen" small >Botao pequeno</C.Botao> 
    </C.Container>
    
  )
}

export default App;