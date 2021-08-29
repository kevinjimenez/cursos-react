import React from "react";
import { PokeapiInterfaces } from "../utils/interfaces/pokeapi.interfaces";

function useInicialState(API: string): PokeapiInterfaces {
  const [pokemos, setPokemos] = React.useState<PokeapiInterfaces>({
    user: {},
    playing: {},
    misPokemon: [],
    tendencias: [],
    pokemons: [],
  });
  React.useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log("data de la api");
        const pokemos = data.results.map((item: any, indice: number) => {
          return {
            ...item,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              indice + 1
            }.png`,
          };
        });
        return setPokemos({
          user: {},
          playing: {},
          misPokemon: [],
          tendencias: pokemos.slice(0, 6),
          pokemons: pokemos,
        });
      });
  }, []);
  return pokemos;
}

export { useInicialState };
