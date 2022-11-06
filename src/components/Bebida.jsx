import { Button, Card, Col } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const Bebida = ({bebida}) => {

    const { handleModalClick, handleBebidaIdClick, handleAgregarBebidaFavorita, bebidasFavoritas } = useBebidas()
    const { strDrinkThumb, strDrink, idDrink } = bebida

    return (
        <Col md={6} lg={3} className='mb-4' >
            <Card>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
                <Card.Body className='backgroundCard'>
                    <Card.Title className='text-white'>
                        {strDrink}
                    </Card.Title>
                    <Button 
                        variant='warning'
                        className='w-100 text-uppercase mt-2'   
                        onClick={ () => {
                            handleModalClick()
                            handleBebidaIdClick(idDrink)
                            }
                        }
                    >
                        Ver Receta
                    </Button>
                    <Button 
                        variant='info'
                        className='w-100 text-uppercase mt-2'   
                        onClick={() => handleAgregarBebidaFavorita(bebida)}
                    >
                        {
                            bebidasFavoritas.includes(bebida) ?  '💛' : '🖤'
                        }
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Bebida
