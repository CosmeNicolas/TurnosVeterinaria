import Swal from 'sweetalert2';
import { Container, Button, ListGroup, Card } from 'react-bootstrap';

const Turno = ({ turnos, borrarTurno }) => {
  console.log(turnos)
  const confirmarBorrarTurno = (itemTurno) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#116A7B',
      cancelButtonColor: '#a44747',
      confirmButtonText: 'Sí, Borrar',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'container-alert',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTurno(itemTurno);
        mostrarMensajeBorrado();
      }
    });

  };

  const mostrarMensajeBorrado = () => {
    Swal.fire({
      title: '¡Borrado!',
      text: 'El turno ha sido eliminado',
      icon: 'success',
      confirmButtonColor: '#116A7B',
      customClass: {
        popup: 'container-alert'
      }
    });
  };

  return (
    <>
      <Container>
        {
          turnos.map((itemTurno, posicionItemTturno) => (
            <Card key={posicionItemTturno} className='my-3'>
              <Card.Body >
                <Card.Title>Turno</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Mascota</Card.Subtitle>
                <ListGroup variant="flush" className='text-start'>
                  <ListGroup.Item>Nombre mascota: {itemTurno.nombreMascota}</ListGroup.Item>
                  <ListGroup.Item>Nombre Dueño: {itemTurno.nombreDueno}</ListGroup.Item>
                  <ListGroup.Item>Fecha: {itemTurno.fecha}</ListGroup.Item>
                  <ListGroup.Item>Hora: {itemTurno.hora}</ListGroup.Item>
                  <ListGroup.Item>Sintomas: {itemTurno.sintoma}</ListGroup.Item>
                </ListGroup>
                <Button onClick={() => confirmarBorrarTurno(itemTurno)} variant="dark" className='btn-borrar py-2'>
                  Borrar Turno
                </Button>
              </Card.Body>
            </Card>
          ))}

        {turnos.length === 0 && (
          <Card.Body>
            <Card.Title className='py-3 my-3 bg bg-body-tertiary border-title'>No hay turnos cargados</Card.Title>
          </Card.Body>
        )}
      </Container>
    </>
  );
};

export default Turno;