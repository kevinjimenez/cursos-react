import React from "react";
import './TodoCounter.css';
import {TodoContext} from "../../TodoContext/todoContext";

function TodoCounter(props) {

    const {completedTodos, totalTodos} = React.useContext(TodoContext)

    // const {total, completed} = props;
    return(
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter}
