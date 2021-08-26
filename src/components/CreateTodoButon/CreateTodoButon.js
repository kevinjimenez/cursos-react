import React from "react";
import './CreateTodoButon.css';



function CreateTodoButon(props) {

    const onClickButton = ()=> {
        // tbm recibe una funcion y recine el estado anterior
        props.setOpenModal(prevState => !prevState)
    }

    return(
        <button
            className='CreateTodoButon'
            onClick={onClickButton}>
            +
        </button>
    )
}

export {CreateTodoButon}
