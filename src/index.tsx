import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Rutas} from "./routes/Rutas";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import {Provider} from "react-redux";

import reducers from "./reducers/reducers";

const store = createStore(
    reducers,
    {},
    applyMiddleware(ReduxThunk)
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
