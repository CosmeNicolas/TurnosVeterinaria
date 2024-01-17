import Swal from 'sweetalert2'
import { useState, useEffect } from 'react'
import { Form, Button } from "react-bootstrap";
import Turno from './Turno';


const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueno, setNombreDueno] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintoma, setSintoma] = useState('')
  const turnosGuardados = JSON.parse(localStorage.getItem('guardarTurno')) || [];
  const [turnos, setTurnos] = useState(turnosGuardados);

  console.log(turnos)

  useEffect(() => {
    localStorage.setItem('guardarTurno', JSON.stringify(turnos))
  }, [turnos])


  const borrarTurno = (nombreTurno) => {
    const tomarTurno = turnos.filter((turno) => turno !== nombreTurno);
    setTurnos(tomarTurno)
  }


  //validar turnos cada media hora
  const validarTurno = ()=>{
    const horaActual = new Date();
    const horaDelTurno = new Date(`${fecha}T${hora}`);
    const horaMinima = new Date(`${fecha}T00:00:00`);
    const horaMaxima = new Date(`${fecha}T23:59:59`);
    const mediaHoraEnMilisegundos = 30 * 60 * 1000;
    
    if (
      isNaN(horaDelTurno.getTime()) ||
      horaDelTurno < horaMinima ||
      horaDelTurno > horaMaxima ||
      (horaDelTurno.getMinutes() % 30 !== 0) ||
      turnos.some(
        (turno) =>
        new Date(`${turno.fecha}T${turno.hora}`).getTime() ===
          horaDelTurno.getTime()
        )
        ) {
    Swal.fire({
      title: '¡Error!',
      icon: 'error',
      text: 'Hora de turno no válida o ya está ocupada. Los turnos deben ser cada 30 minutos.',
    });
    return false;
  }
    return true;
  
}

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarTurno()) {
      return;
    }

    const nuevoTurno = {
      nombreMascota,
      nombreDueno,
      fecha,
      hora,
      sintoma
    }

    setTurnos([...turnos, nuevoTurno])
    

    setNombreMascota('');
    setNombreDueno('');
    setFecha('');
    setHora('');
    setSintoma('')
    


    Swal.fire({
      title: '¡Turno creado!',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      customClass: {
      popup: 'container-alert',
      }
    })

  }

  

  return (
    <>
      <div className="container container-form">

        <Form onSubmit={handleSubmit} className='p-3 text-start '>
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
              onChange={(e) => setNombreMascota(e.target.value)}
              required />
          </Form.Group>
          {/* nombre dueño */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Dueño</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre de su mascota"
              name='nombreDueno'
              minLength={2}
              maxLength={50}
              value={nombreDueno}
              onChange={(e) => setNombreDueno(e.target.value)}
              required />
          </Form.Group>
          {/* fecha */}
          <Form.Group className="mb-3" controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              name='fecha'
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
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
              onChange={(e) => setHora(e.target.value)}
              required
            />
            <Form.Text id="hora"  className='text-grey'>
              Ingrese una hora valida cada 30 minutos, como por ej:18:00, 18:30, etc.
            </Form.Text>
          </Form.Group>
          {/* Sintomas */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sintomas</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el sintoma de la mascota"
              name='nombreMascota'
              minLength={3}
              maxLength={50}
              value={sintoma}
              onChange={(e) => setSintoma(e.target.value)}
              required />
          </Form.Group>

          <Button variant="dark" type="submit" className='btn-form py-2 my-2'>
            Crear Turno
          </Button>
        </Form>
      </div>
      <Turno turnos={turnos} borrarTurno={borrarTurno} />
    </>
  )
}

export default Formulario;