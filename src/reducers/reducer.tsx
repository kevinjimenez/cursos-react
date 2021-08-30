import { PokeapiInterfaces } from "../utils/interfaces/pokeapi.interfaces";

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
          (item: any) => item.name === action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
