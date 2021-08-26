import React from "react";
import {TodoContext} from "../TodoContext/todoContext";

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const {
        addTodos,
        setOpenModal
    } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    }

    const onChages = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <form onSubmit={onSubmit}>
            <label>input</label>
            <textarea
                value={newTodoValue}
                onChange={onChages}
                placeholder='hahahah'/>
            <div>
                <button
                    type='button'
                    onClick={onCancel}>
                    Cancelar
                </button>
                <button
                    type='button'>
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
