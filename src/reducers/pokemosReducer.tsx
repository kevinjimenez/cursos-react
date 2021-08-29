import { PokeapiInterfaces } from "../utils/interfaces/pokeapi.interfaces";

const INITIAL_STATE: PokeapiInterfaces = {
  user: {},
  playing: {},
  misPokemon: [],
  pokemons: [],
  tendencias: [],
};

// export default (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case "traer_pokemos":
//       return {
//         ...state,
//         user: {},
//         playing: {},
//         misPokemon: [],
//         pokemons: [],
//         tendencias: [],
//       };

//     default:
//       return state;
//   }
// };
