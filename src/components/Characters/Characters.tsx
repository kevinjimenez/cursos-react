import React from "react";
import './Characters.scss'
import axios from "axios";

const initialState = {
    favorites: []
}

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

    const [characters, setCharacters] = React.useState([]);
    const [favorites, dispatch] = React.useReducer(favoriteReducer, initialState);

    React.useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(respuesta => {
                console.log(respuesta.data.results)
                setCharacters(respuesta.data.results)
            })
    }, [])

    const handleClick = (favorite: any) => {
        dispatch({
            type: 'ADD_TO_FAVORITE',
            payload: favorite
        })
    }

    return (
        <>
            {favorites.favorites.map((item: any)=>(
                <li key={item.id}>
                    {item.name}
                </li>
            ))}

            {characters.map((character: any) => (
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
