
import {Container} from 'react-bootstrap'
import Footer from './components/Footer'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
 
  
    

  return (
    <>
      <Container  className="main text-center">
        <h1>Administracion Veterinaria Peluditos🐕</h1>
        <Formulario/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
