import { useState } from "react"

export default function Form({onAddEstudiante}){
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");

    const onHandleSubmit= (e)=>{
        e.preventDefault();
        if(nombre && apellido){
            onAddEstudiante({nombre,apellido})
            setNombre("")
            setApellido("")
        }
    }
    

    return(
            <form onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="text" placeholder="Ingresa tu apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                <button type="submit">Agregar estudiante</button>
            </form>
    )

}