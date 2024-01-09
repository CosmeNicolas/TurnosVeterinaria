import { Button, ListGroup, Card } from 'react-bootstrap';

const Turno = () => {
  return (
    <>
      <Card.Body>
        <Card.Title>Turno</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Mascota</Card.Subtitle>
      <ListGroup variant="flush" className='text-start my-2'>
        <ListGroup.Item>Nombre Mascota</ListGroup.Item>
        <ListGroup.Item>Nombre Dueño</ListGroup.Item>
        <ListGroup.Item>Fecha</ListGroup.Item>
        <ListGroup.Item>Hora</ListGroup.Item>
      </ListGroup>
      <Button variant="dark" className='btn-borrar py-2'>
        Borrar Turno
      </Button>
      </Card.Body>
    </>
  );
};

export default Turno;