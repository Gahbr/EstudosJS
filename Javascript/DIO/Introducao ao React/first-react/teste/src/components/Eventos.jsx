const showEvent= (e) => {
alert("evento clicado!")
console.log(e);
}
const Btn  = <button onClick={showEvent}>Mostrar evento</button>
const handleChange = (e) =>{
    const {value} = e.target
    console.log(value);
}
function Eventos(){
    return (
    <>
    {Btn}
    <input onChange={handleChange} />
    </>
    )
}


export default Eventos