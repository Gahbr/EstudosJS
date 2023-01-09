import {   ChangeEvent, useReducer, useState } from "react";
import { usePeopleList } from "./hooks/usePeopleList";


function App() {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState("");


  const handleAddButton = () =>{
    if(nameInput){
      dispatch({
        type:'ADD',
        payload:{
          name: nameInput
        }
      })
      setNameInput('')
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>)=>{
    setNameInput(e.target.value)
  }

  const deletePerson = (id: string) =>{
    dispatch({
      type: 'DEL',
      payload:{id}
    })
  }

  const handleOrderButton = ()=>{
    dispatch({
      type: 'ORDER'
    })
  }
  
  return (
    <div className="p-5">
      <input className="border-2" type="text" onChange={handleInputChange}/>
      <button onClick={handleAddButton} value={nameInput} >Adicionar </button>
        <hr />
        <button onClick={handleOrderButton}>Ordenar</button>
        <br />

        Lista de pessoas : 
      <ul>
        {list.map((item, index) =>(
          <li key={index}>
             {item.name}
             <button onClick={()=> deletePerson(item.id)}>[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>

  )
  }

export default App;
