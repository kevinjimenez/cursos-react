import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import reduxThunk from "redux-thunk";
import { Rutas } from "./routes/Rutas";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { PokeapiInterfaces } from "./utils/interfaces/pokeapi.interfaces";
// import reducers from "./reducers/index";
const inicialState: any = {
  user: {},
  playing: {},
  misPokemon: [],
  tendencias: [
    {
      name: "unown",
      url: "https://pokeapi.co/api/v2/pokemon/201/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "wobbuffet",
      url: "https://pokeapi.co/api/v2/pokemon/202/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      name: "girafarig",
      url: "https://pokeapi.co/api/v2/pokemon/203/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      name: "pineco",
      url: "https://pokeapi.co/api/v2/pokemon/204/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "forretress",
      url: "https://pokeapi.co/api/v2/pokemon/205/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      name: "dunsparce",
      url: "https://pokeapi.co/api/v2/pokemon/206/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
  ],
  pokemons: [
    {
      name: "unown",
      url: "https://pokeapi.co/api/v2/pokemon/201/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      name: "wobbuffet",
      url: "https://pokeapi.co/api/v2/pokemon/202/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
      name: "girafarig",
      url: "https://pokeapi.co/api/v2/pokemon/203/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
    {
      name: "pineco",
      url: "https://pokeapi.co/api/v2/pokemon/204/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      name: "forretress",
      url: "https://pokeapi.co/api/v2/pokemon/205/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    },
    {
      name: "dunsparce",
      url: "https://pokeapi.co/api/v2/pokemon/206/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    },
    {
      name: "gligar",
      url: "https://pokeapi.co/api/v2/pokemon/207/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      name: "steelix",
      url: "https://pokeapi.co/api/v2/pokemon/208/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    },
    {
      name: "snubbull",
      url: "https://pokeapi.co/api/v2/pokemon/209/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    },
    {
      name: "granbull",
      url: "https://pokeapi.co/api/v2/pokemon/210/",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    },
  ],
};
const store = createStore(reducer, inicialState);

// ReactDOM.render(
//         <Rutas />,
//     document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <Rutas />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
