import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes} from "./routes/routes";

ReactDOM.render(
    <Routes />,
  document.getElementById('root')
);
