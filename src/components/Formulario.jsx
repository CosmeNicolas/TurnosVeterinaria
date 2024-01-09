 import { useState } from 'react' 
import { Form, Button} from "react-bootstrap";
import TurnosVista from './TurnosVista';


const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState('')
  const [nombreDueño, setNombreDueno] = useState('')
  const [fecha, setFecha] = useState('')
  const [hora, setHora] = useState('')
  const [turno, setTurno] = useState([])

  


  const handleSubmit = (e)=> {
    e.preventDefault();

    const ingresoMascota = {
      nombreMascota,
      nombreDueño,
      fecha,
      hora
    }



    setTurno([...turno, ingresoMascota])
    console.log(setTurno)
  }


  return(
    <>
    
    <div className="container container-form">

      <Form onSubmit={handleSubmit}>
        {/* nombre mascota */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Mascota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de su mascota"
            name='nombreMascota'
            minLength={2}
            maxLength={50}
            value={nombreMascota}
            onChange={(e)=>setNombreMascota(e.target.value)}
            required />
        </Form.Group>
        {/* nombre dueño */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre Dueño</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre de su mascota"
            name='nombre'
            minLength={2}
            maxLength={50}
            value={nombreDueño}
            onChange={(e)=>setNombreDueno(e.target.value)}
            required />
        </Form.Group>
        {/* fecha */}
        <Form.Group className="mb-3" controlId="formFecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            name='fecha'
            value={fecha}
            onChange={(e)=>setFecha(e.target.value)}
            required
          />
        </Form.Group>
        {/* hora */}
       
        <Form.Group className="mb-3" controlId="formHora">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            name='hora'
            value={hora}
            onChange={(e)=>setHora(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" className='btn-form py-2 my-2'>
          Crear Turno
        </Button>
      </Form>
    </div>
    <TurnosVista/>
        </>
  )
}

export default Formulario;