import {CARGANDO, TRAER_POR_USUARIO, ERROR} from "../Types/publicacionTypes";

const INITIAL_STATE = {
    publicaciones: [],
    cargando: false,
    error: ''
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TRAER_POR_USUARIO:
            return {
                ...state, 
                publicaciones: action.payload, 
                cargando: false,
                error: ''
            }

        case CARGANDO:
            return {...state, cargando: true}

        case ERROR:
            return {...state, error: action.payload, cargando: false}

        default:
            return state
    }
}
