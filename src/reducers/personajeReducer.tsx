const INITIAL_STATE = {
    personajes: []
}

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'GET_PERSONAJES':
            return {...state, personajes: action.payload}

        default:
            return state
    }
}
