import {Card} from 'react-bootstrap';
import Turno from './Turno';

const TurnosVista = () => {
  return (
    <div className='d-flex justify-content-center my-3'>
    <Card style={{ width: '18rem' }} className='my-2'>
      <Turno/>
    </Card>
    </div>
  );
};

export default TurnosVista;