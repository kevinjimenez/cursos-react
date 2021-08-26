import React from "react";

function useLocalStorage(itemName, inicialValue) {
    // estado error
    const [error, setError] = React.useState(false)

    // estado carga
    const [loading, setLoading] = React.useState(true)


    // react hook estado inicial stateFull
    const [item, setItem] = React.useState(inicialValue)

    // sin el arreglo vacio se renderixa cada vez q escuche un cambio
    React.useEffect(() => {
        console.log('aqui esta usanso hock useEfecct')
        setTimeout(() => {

            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parseItem;


                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(inicialValue))
                    parseItem = inicialValue;
                } else {
                    parseItem = JSON.parse(localStorageItem);
                }

                // cambiando e estado
                setItem(parseItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }

        }, 1000)
    },);


    const saveItem = (newItem) => {

        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem)
            setItem(newItem)
        } catch (error) {
            setError(error);
        }
    }


    // si se retorna mas de 2 elementos se retoena un object
    return {
        item,
        saveItem,
        loading
    }
}

export  {useLocalStorage}
