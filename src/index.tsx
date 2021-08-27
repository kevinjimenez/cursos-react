import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {Rutas} from "./routes/Rutas";
// import {Provider} from "react-redux";
// import {createStore} from "redux";
// import {Reducers} from "./reducers/reducers";
// const inicialState = {}
// const store = createStore(Reducers, (inicialState as any))

ReactDOM.render(
        <Rutas />,
    document.getElementById('root')
);

// ReactDOM.render(
//     <Provider store={store}>
//         <Rutas />
//     </Provider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
