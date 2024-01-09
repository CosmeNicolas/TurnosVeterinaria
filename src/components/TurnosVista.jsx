import {Card, Button, ListGroup} from 'react-bootstrap';

const TurnosVista = () => {
  return (
    <div className='d-flex justify-content-center my-3'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Turno</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Mascota</Card.Subtitle>
          <ListGroup variant="flush" className='text-start'>
            <ListGroup.Item>Nombre Mascota</ListGroup.Item>
            <ListGroup.Item>Nombre Dueño</ListGroup.Item>
            <ListGroup.Item>Fecha</ListGroup.Item>
            <ListGroup.Item>Hora</ListGroup.Item>
          </ListGroup>
        <Button variant="dark" className='btn-borrar py-2'>
          Borrar Turno
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default TurnosVista;