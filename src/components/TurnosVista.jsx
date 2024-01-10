import {Card} from 'react-bootstrap';
import Turno from './Turno';

const TurnosVista = ({ turnos, borrarTurno  }) => {
  return (
    <div className='d-flex justify-content-center my-3'>
    <Card style={{ width: '18rem' }}>
       
        <Turno turnos={turnos} borrarTurno={borrarTurno} />
       
    </Card>
    </div>
  );
};

export default TurnosVista;