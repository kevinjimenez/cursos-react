import React from "react";
import './TodoSearch.css'
import {TodoContext} from "../../TodoContext/todoContext";

function TodoSearch() {

    // const [searchValue, setSearchValue] = React.useState('')
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event)
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input
            type="text"
            placeholder='Cebolla'
            value={searchValue}
            className='TodoSearch'
            onChange={onSearchValueChange}/>
    )
    // return [
    //     <input
    //         type="text"
    //         placeholder='Cebolla'
    //         className='TodoSearch'
    //         value={searchValue}
    //         onChange={onSearchValueChange}/>,
    //     <p>{searchValue}</p>
    // ]
}

export {TodoSearch}
