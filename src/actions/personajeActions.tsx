import axios from "axios";

export const traerTodos = () => async (dispatch: any) => {
    const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch({
        type: 'GET_PERSONAJES',
        payload: respuesta.data.results
    })
}
