
import { Container, } from 'react-bootstrap'
import Formulario from './components/Formulario'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import ListadoFavoritos from './components/ListadoFavoritos'
const App = () => {
    return (
        <BebidasProvider>
            <CategoriasProvider>

                <header className='py-5'>
                    <h1>Buscador de Bebidas</h1>
                </header>
                
                <Container className='mt-5'>
                    <Formulario/>
                    <ListadoBebidas/>
                    <ListadoFavoritos/>
                    <ModalBebida/>
                </Container>
            </CategoriasProvider>
        </BebidasProvider>
    )
}

export default App
