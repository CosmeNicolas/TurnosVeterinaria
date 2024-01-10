import { Container, Button, ListGroup, Card } from 'react-bootstrap';

const Turno = ({ turnos, borrarTurno }) => {
  return (
    <>
      <Container>
        {turnos.map((itemTurno, posicionItemTturno) => (
          <Card.Body key={posicionItemTturno}>
            <Card.Title>Turno</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Mascota</Card.Subtitle>
            <ListGroup variant="flush" className='text-start'>
              <ListGroup.Item>Nombre mascota: {itemTurno.nombreMascota}</ListGroup.Item>
              <ListGroup.Item>Nombre Dueño: {itemTurno.nombreDueno}</ListGroup.Item>
              <ListGroup.Item>Fecha: {itemTurno.fecha}</ListGroup.Item>
              <ListGroup.Item>Hora: {itemTurno.hora}</ListGroup.Item>
            </ListGroup>
            <Button onClick={() => borrarTurno(itemTurno)} variant="dark" className='btn-borrar py-2'>
              Borrar Turno
            </Button>
          </Card.Body>
        ))}
        {turnos.length === 0 && (
          <Card.Body>
            <Card.Title>Ningún turno cargado</Card.Title>
          </Card.Body>
        )}
      </Container>
    </>
  );
};

export default Turno;