import { useState } from "react";

const App = () =>{

  const [show, setShow] = useState(false);

  const handleClick = ()=>{
    setShow(!show)
  }
  return (
  <div>
    <button onClick={handleClick}> {show ? 'Ocultar' : 'Mostrar'} </button>

    {show ===true && 
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, architecto.
    </div>
  }
  </div>
  )
}

export default App;