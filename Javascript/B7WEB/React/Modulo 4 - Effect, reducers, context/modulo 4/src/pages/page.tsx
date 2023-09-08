import React, { useReducer } from "react";
import { listReducer } from "../reducers/listReducer";

const Page = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  console.log(list);
const handleAddClick = () => {
  dispatch({
    type:'add',
    payload: {
      text:'Novo item'
    }
  })
};

return (
  <div>
    <button onClick={handleAddClick}>Adicionar</button>
  </div>
);
}

export default  Page;