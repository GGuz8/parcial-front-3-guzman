function Event({numero}){

    function miEvento(){
        console.log("Activado N° "+numero);
    }

    return (
        <div>
            <p>Click para lanzar un evento</p>
            <button onClick={miEvento}>Activar</button>
        </div>
    )


}
export default Event;