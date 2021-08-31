import {TRAER_TODOS} from "../Types/personajeTypes";

const INITIAL_STATE = {
    personajes: []
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TRAER_TODOS:
            return {...state, personajes: action.payload}

        default:
            return state
    }
}
