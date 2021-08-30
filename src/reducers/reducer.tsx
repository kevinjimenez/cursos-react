import {PokeapiInterfaces} from "../utils/interfaces/pokeapi.interfaces";

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_FAVORITE":
            return {
                ...state,
                misPokemon: [...state.misPokemon, action.payload],
            };

        case "DELETE_FAVORITE":
            return {
                ...state,
                misPokemon: state.misPokemon.filter(
                    (item: any) => item.name !== action.payload
                ),
            };

        case "LOGIN_REQUEST":
            return {
                ...state,
                user:action.payload,
            };

        case "LOOUT_REQUEST":
            return {
                ...state,
                user:action.payload,
            };

        case "REGISTER_REQUEST":
            return {
                ...state,
                user:action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
