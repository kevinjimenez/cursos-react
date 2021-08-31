import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Rutas} from "./routes/Rutas";
import {createStore} from "redux";
import reducers from "./reducers/reducers";
import {Provider} from "react-redux";

const store = createStore(
    reducers,
    {}
)

ReactDOM.render(
    <Provider store={store}>
        <Rutas />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
