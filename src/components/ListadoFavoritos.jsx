import { Row } from 'react-bootstrap'

import useBebidas from '../hooks/useBebidas'
import Bebida from './Bebida'

const ListadoFavoritos = () => {
    const { bebidasFavoritas } = useBebidas()
    return (
        <>
            <h2>LISTADO FAVORITOS</h2>
            <Row className='mt-5'>
                {
                    bebidasFavoritas.map(bebida => (
                        <Bebida 
                            key={`bebida key ${bebida.idDrink}`}
                            bebida={bebida}
                        />
                    ))
                }
            </Row>
        </>
    )
}

export default ListadoFavoritos