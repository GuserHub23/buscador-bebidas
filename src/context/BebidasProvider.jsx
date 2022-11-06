import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import useLocalStorage from '../hooks/useLocalStorage'
const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [ bebidas, setBebidas ] = useState([])
    const [ modal, setModal ] = useState(false)
    const [ bebidaId, setBebidaId ] = useState(null)
    const [ receta, setReceta ] = useState([])
    const [ cargando, setCargando ] = useState(false)
    
    const [ bebidasFavoritas, setBebidasFavoritas ] = useLocalStorage('favoritos', [])

    useEffect(() => {
        setCargando(true)
        obtenerReceta()
    }, [ bebidaId ])

    const obtenerReceta = async () => {
        if(!bebidaId) {
            return
        }
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`
            const { data } = await axios(url)
            setReceta(data.drinks[0])
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }
    }
    const obtenerBebidas = async datos => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
        try {
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }

    const handleAgregarBebidaFavorita = (bebida) => {
        if (bebidasFavoritas.includes(bebida)) {
            eliminarBebidaFavorita(bebida.idDrink)
            return
        }
        setBebidasFavoritas([...bebidasFavoritas, bebida])
    }

    const eliminarBebidaFavorita = (id) => {
        setBebidasFavoritas(bebidasFavoritas.filter(bebida => bebida.idDrink !== id ? bebida : ''))
    }

    return (
        <BebidasContext.Provider
            value={{
                bebidas,
                obtenerBebidas,
                modal,
                handleModalClick,
                handleBebidaIdClick,
                receta,
                cargando,
                bebidasFavoritas,
                setBebidasFavoritas,
                handleAgregarBebidaFavorita
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}
export default BebidasContext