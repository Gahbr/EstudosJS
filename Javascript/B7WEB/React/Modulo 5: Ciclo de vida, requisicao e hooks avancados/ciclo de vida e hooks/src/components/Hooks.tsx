import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function Hooks() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

//vai renderizar sempre quando 'name' ou 'lastname' forem alterados
 useEffect(() => {
   setFullName(`${name} ${lastName}`);
 }, [name, lastName]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

 
  return (
    <div>
      <input type="text" placeholder="Digite o seu nome" value={name} onChange={handleNameChange}/>
      <input type="text" placeholder="Digite o seu sobrenome" value={lastName} onChange={handleLastNameChange}/>
      <p>Nome completo : {fullName} </p>
    </div>
  );
}

export default Hooks;
