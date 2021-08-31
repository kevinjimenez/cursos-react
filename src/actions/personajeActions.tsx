import axios from "axios";
import {TRAER_TODOS} from "../Types/personajeTypes";

export const traerTodos = () => async (dispatch: any) => {
    const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch({
        type: TRAER_TODOS,
        payload: respuesta.data.results
    })
}
