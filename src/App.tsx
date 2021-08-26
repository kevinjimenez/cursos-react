import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from "./components/Header/Header";
import './App.scss'
import {Search} from "./components/Search/Search";
import {Categorias} from "./components/Categorias/Categorias";
import {Carousel} from "./components/Carousel/Carousel";
import {CarouselItem} from "./components/CarouselItem/CarouselItem";
import {Footer} from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Search/>
            <Categorias>
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categorias>
            <Footer/>
        </div>
    );
}

export default App;
