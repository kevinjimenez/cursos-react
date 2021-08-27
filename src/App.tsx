import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from "./components/Header/Header";
import './App.scss'
import {Search} from "./components/Search/Search";
import {Categorias} from "./components/Categorias/Categorias";
import {Carousel} from "./components/Carousel/Carousel";
import {CarouselItem} from "./components/CarouselItem/CarouselItem";
import {Footer} from "./components/Footer/Footer";
import {useInicialState} from "./hooks/useInicialState";
// import {connect} from "react-redux";

const API = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=200';

function App() {

    // const [videos, setVideos] = React.useState<any>({});
    //
    //
    // React.useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('data de la api')
    //             console.log(data)
    //             setVideos(data)
    //         })
    // }, [])

    const inicialState = useInicialState(API)

    console.log('use state')
    console.log(inicialState)

    return (
        <>
            {/*<Header/>*/}
            <Search/>
            {inicialState.misPokemon.length > 0 &&
            <Categorias title='Mis pokemos'>
                <Carousel>
                    {
                        inicialState.misPokemon.map((pokemon: any) =>
                            <CarouselItem
                                key={pokemon.name}
                                {...pokemon}/>
                        )
                    }
                </Carousel>
            </Categorias>
            }

            <Categorias title='Tendencias'>
                <Carousel>
                    {
                        inicialState.tendencias.map((pokemon: any) =>
                            <CarouselItem
                                key={pokemon.name}
                                {...pokemon}/>
                        )
                    }
                </Carousel>
            </Categorias>

            <Categorias title='Originasles de Platzi Video'>
                <Carousel>
                    {
                        inicialState.pokemons.map((pokemon: any) =>
                            <CarouselItem
                                key={pokemon.name}
                                {...pokemon}/>
                        )
                    }
                </Carousel>
            </Categorias>
            {/*<Footer/>*/}
        </>
    );
}

export default App;
// redux
// const mapStateProps = (state: any) => {
//     return {
//         myList: [],
//         trend: [],
//         original: []
//     }
// } // solo traes los daos q se usan
// export default connect(mapStateProps, null)(App)
