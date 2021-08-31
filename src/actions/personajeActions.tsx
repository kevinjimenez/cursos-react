import axios from "axios";
import {CARGANDO, ERROR, TRAER_TODOS} from "../Types/personajeTypes";

export const traerTodos = () => async (dispatch: any) => {
    dispatch({
        type: CARGANDO,
    })

    try {
        const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
        dispatch({
            type: TRAER_TODOS,
            payload: respuesta.data.results
        })
    } catch (error) {
        // @ts-ignore
        console.log('Error', error.message)
        dispatch({
            type: ERROR,
            // @ts-ignore
            payload: error.message
        })
    }
}
