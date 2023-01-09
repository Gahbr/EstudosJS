import React, { ChangeEvent, useState } from 'react'


type Props = {
    onAdd : (title : string, body: string) => void
}

export const PostForm = ({onAdd} : Props) => {
    const [addTitleText, setAddTitleText] = useState("");
    const [addBodyText, setAddBodyText] = useState("");

    const handleAddTitleChange = (e : ChangeEvent<HTMLInputElement>) =>{
        setAddTitleText(e.target.value)
      }
      
      const handleAddBodyChange = (e : ChangeEvent<HTMLTextAreaElement>) =>{
        setAddBodyText(e.target.value)
      }


      function handleAddClick(){
        if (addTitleText && addBodyText){
            onAdd(addBodyText, addBodyText)
        }else {
            alert("Preencha os campos")
        }
      }
  return (
    <fieldset className="border-2 mb-3">
    <legend>Adicionar novo post</legend>
    <input type="text" placeholder="Digite um título" className="block border" value={addTitleText} onChange={handleAddTitleChange}/>
    <textarea className="block border" value={addBodyText} onChange={handleAddBodyChange}></textarea>
    <button className="block border"  onClick={handleAddClick}>Adicionar</button>

  </fieldset>
  )
}
