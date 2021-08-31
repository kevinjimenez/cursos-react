import {CARGANDO, TRAER_TODOS, ERROR} from "../Types/personajeTypes";

const INITIAL_STATE = {
    personajes: [],
    cargando: false,
    error: ''
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {...state, personajes: action.payload, cargando: false}

        case CARGANDO:
            return {...state, cargando: true}

        case ERROR:
            return {...state, error: action.payload, cargando: false}

        default:
            return state
    }
}
