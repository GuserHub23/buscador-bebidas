import { useState } from 'react'
import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'
import useCategorias from '../hooks/useCategorias'

const Formulario = () => {

    const [ busqueda, setBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })

    const [ alerta, setAlerta ] = useState('')
    
    const { categorias } = useCategorias()
    const { obtenerBebidas } = useBebidas()

    
    const handleSubmit = e => {
        e.preventDefault()
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return
        }
        setAlerta('')
        obtenerBebidas(busqueda)
    }
    return (
        <Form
            onSubmit={handleSubmit}
        >
            { alerta && <Alert className='text-center' variant='danger'>{alerta}</Alert> }
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='nombre'>
                            Nombre Bebida
                        </Form.Label>
                        <Form.Control
                            autoFocus
                            id='nombre'
                            type='text'
                            placeholder='Ej: Tequila, Vodka, etc'
                            name='nombre'
                            value={busqueda.nombre}
                            onChange={e => setBusqueda({
                                ...busqueda, [e.target.name] : e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label htmlFor='categoria'>
                            Categoria Bebida
                        </Form.Label>
                        <Form.Select
                            id='categoria'
                            name='categoria'
                            value={busqueda.categoria}
                            onChange={e => setBusqueda({
                                ...busqueda, [e.target.name] : e.target.value
                            })}
                        >
                            <option>- Selecciona Categoria -</option>
                            {
                                categorias.map(({strCategory}) => (
                                    <option
                                        key={strCategory}
                                        value={strCategory}
                                    >
                                        {strCategory}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className='justify-content-end mt-3'>
                <Col md={4}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100'
                        type='submit'
                    >
                        Buscar Bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default Formulario
