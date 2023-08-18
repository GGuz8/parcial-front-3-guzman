import { useState } from 'react'

import './App.css'

import Form from './Form'
import Card from './Card'

function App() {
  const [estudiantes, setEstudiantes] = useState([])

  const addEstudiante = (estudiante)=>{
    setEstudiantes([...estudiantes,estudiante]);
  }


  return (
    
    <div className='App'>
      <h1>Carga de estudiantes</h1>
      <Form onAddEstudiante={addEstudiante}/>
      <Card estudiantes={estudiantes}/>
    </div>
  )
}

export default App
