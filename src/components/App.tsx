import React from 'react';
import './App.scss';
// import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from "./Header/Header";
import {Characters} from "./Characters/Characters";


function App() {
    return (
        <div className="App">
            <Header/>
            <h1>Hola mundo</h1>
            <div className='row'>
                <Characters/>
            </div>
        </div>
    );
}

export default App;
