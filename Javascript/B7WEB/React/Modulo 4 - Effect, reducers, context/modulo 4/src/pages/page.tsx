import React, { useEffect, useReducer, useState } from "react";
import { listReducer } from "../reducers/listReducer";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(list);
  }, [list])
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setInput(e.target.value)
  }

  
const handleAddClick = () => {
  dispatch({
    type:'add',
    payload: {
      text: input
    }
  })

  setInput("")
};
const handleEditClick = (idValue: number) => {
  dispatch({
    type:'editText',
    payload: {
     id: idValue,
      newText: input 
    }
  })

 return (
  <div>
    yae
  </div>
 )
};

return (
  <div>
    <h1>TO-DO</h1>
    <ul>
      {list.map((item, index) =>(
        <li key={index}>{item.id} | {item.text} | <input type="checkbox"></input> <button style={{margin:'10px'}} onClick={()=>handleEditClick(item.id)}>Editar</button></li>
        
      ))}
    </ul>
     <input type="text" name="add" id="" onChange={handleOnChange} value={input || "" } /><button onClick={handleAddClick}>Adicionar</button>
  </div>
);
}

export default  Page;