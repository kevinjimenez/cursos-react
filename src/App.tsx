import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from "./components/Header/Header";
import './App.scss'
import {Search} from "./components/Search/Search";

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
        </div>
    );
}

export default App;
