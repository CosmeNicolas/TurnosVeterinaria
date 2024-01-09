import { Button, ListGroup } from 'react-bootstrap';

const Turno = () => {
  return (
    <>
      <ListGroup variant="flush" className='text-start'>
        <ListGroup.Item>Nombre Mascota</ListGroup.Item>
        <ListGroup.Item>Nombre Dueño</ListGroup.Item>
        <ListGroup.Item>Fecha</ListGroup.Item>
        <ListGroup.Item>Hora</ListGroup.Item>
      </ListGroup>
      <Button variant="dark" className='btn-borrar py-2'>
        Borrar Turno
      </Button>
    </>
  );
};

export default Turno;