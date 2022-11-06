import { Modal, Image } from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

import { v4 as uuidv4 } from 'uuid'

const ModalBebida = () => {
    const { modal, handleModalClick, receta, cargando } = useBebidas()

    const { 
        strAlcoholic, 
        strDrink, 
        strDrinkThumb, 
        strInstructions,
        idDrink
    } = receta

    const mostrarIngredientes = () => {
        let ingredientes = []
        for (let i = 1; i < 16; i++) {
            if(receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={uuidv4()}>
                        {receta[`strIngredient${i}`]}&ensp;
                        {receta[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredientes
    }

    return (
        !cargando && (
            <Modal show={modal} onHide={handleModalClick}>
                <Image 
                    src={strDrinkThumb} 
                    alt={`Imagen receta ${strDrink}`}
                />
                <Modal.Header>
                    <Modal.Title>{strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='p-3'>
                        <h2>Instrucciones</h2>
                        <label>{strInstructions}</label>
                        <h2>Ingredientes y Cantidades</h2>
                        <label>{mostrarIngredientes()}</label>
                        <p>Bebida Tipo:&ensp;{strAlcoholic}</p>
                    </div>
                </Modal.Body>
            </Modal>
        )
    )
}

export default ModalBebida
