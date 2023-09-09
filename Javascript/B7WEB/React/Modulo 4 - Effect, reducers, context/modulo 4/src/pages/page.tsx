import React, { useReducer, useState } from "react";
import { listReducer } from "../reducers/listReducer";
import { Item } from "../types/Item";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  const [todo, setTodo] = useState<Item>( {id:0,text:'',done:false} );
  const [showDiv, setshowDiv] = useState<boolean>(false)
  const [isBtnDisabled, setisBtnDisabled] = useState<boolean>(false)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    //setInput(e.target.value)
    setTodo({...todo, text:e.target.value})
  }
  
const handleAddClick = () => {
 
if(todo.text.length > 0 ){
  dispatch({
    type:'add',
    payload: {
      text: todo.text
    }
  })
}
setTodo({...todo, text:''})
};
const handleEditClick = (idValue: number) => {
  dispatch({
    type:'editText',
    payload: {
     id: idValue,
      newText: todo.text 
    }
  })
  setshowDiv(false)
  setisBtnDisabled(false)
};

const handleEdit = (value:string, idValue: number) => {
  setTodo({...todo, text:value, id: idValue})
  setshowDiv(true)
  setisBtnDisabled(true)
};

const handleDeleteClick = (idValue: number): void => {
    dispatch({
      type:'remove',
      payload: {
        id: idValue
      }
    })
  };

return (
  <div>
    <h1>TO-DO</h1>
    <ul>
      {list.map((item, index) =>(
        <li key={index}>{item.id} | {item.text} | <input type="checkbox"></input> <button onClick={()=>handleEdit(item.text,item.id)}>Editar</button> <button style={{margin:'10px'}} onClick={()=>handleDeleteClick(item.id)}>Deletar</button></li>
      ))}
      
    </ul>
       
     <input type="text" name="add" id="" onChange={handleOnChange} value={todo.text || "" } /> {showDiv && <button  id="confirmButton" onClick={()=> handleEditClick(todo.id)}>Confirmar</button>}<button onClick={handleAddClick} disabled={isBtnDisabled}>{'Adicionar'}</button> 
  </div>
);
}

export default  Page;