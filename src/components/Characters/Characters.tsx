import React from "react";
import './Characters.scss'
import axios from "axios";
import {Search} from "../Search/Search";
import {useCharacter} from "../../hooks/useCharacter";

const initialState = {
    favorites: []
}
const API = 'https://rickandmortyapi.com/api/character';

const favoriteReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default:
            return state;
    }
}

function Characters() {

    // const [characters, setCharacters] = React.useState([]);
    const characters = useCharacter(API);
    const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);
    const [search, setSearch] = React.useState('');
    const searchInput = React.useRef<any>(null)

    // React.useEffect(() => {
    //     axios.get('https://rickandmortyapi.com/api/character')
    //         .then(respuesta => {
    //             console.log(respuesta.data.results)
    //             setCharacters(respuesta.data.results)
    //         })
    // }, [])

    const handleClick = (favorite: any) => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    // forma tradicional sin hook
    // const handleSearch = (event: any) => {
    //     setSearch(event.target.value);
    // }


    // const handleSearch = () => {
    //     setSearch(searchInput.current.value);
    // }

    // uso de use callback
    const handleSearch = React.useCallback(() => {
        setSearch(searchInput.current.value)
    }, [])

    // const filterCharacters = characters.filter((item: any)=>{
    //     return item.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filterCharacters = React.useMemo(() =>
        characters.filter((item: any) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        }), [characters, search]
    )


    return (
        <>
            {favorites.favorites.map((item: any) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}

            {/*<div className='Search'>*/}
            {/*    <input type="text"*/}
            {/*           className='btn btn-outline-secondary'*/}
            {/*           value={search}*/}
            {/*           ref={searchInput}*/}
            {/*           onChange={handleSearch}/>*/}
            {/*</div>*/}
            <Search search={search}
                    searchInput={searchInput}
                    handleSearch={handleSearch}/>

            {filterCharacters.map((character: any) => (
                <div className='col-sm-4' key={character.id}>
                    <div className="card border-secondary mb-3"
                         style={{maxWidth: '18rem'}}>
                        <div className="card-header">{character.name}</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">Secondary card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the
                                bulk
                                of the card's content.</p>
                            <button className='btn btn-outline-danger'
                                    onClick={() => handleClick(character)}>
                                agregar a favoritos
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export {Characters}
