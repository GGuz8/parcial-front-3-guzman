export default function Card({estudiantes}){

    return(
        <div>
        <h2>Estudiantes</h2>
        {estudiantes.map((estudiante,index)=>(
            <div key={index}>
            <h3>{estudiante.nombre} {estudiante.apellido}</h3>
            </div>
        )
            
        )
        }
        </div>
    )

}