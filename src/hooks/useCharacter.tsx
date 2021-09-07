import React from "react";
import axios from "axios";

function useCharacter(url: string) {
    const [characters, setCharacters] = React.useState([])

    React.useEffect(()=>{
        axios.get(url)
            .then((respuesta)=>{
                setCharacters(respuesta.data.results)
            })
    }, [url])

    return characters
}

export {useCharacter}
