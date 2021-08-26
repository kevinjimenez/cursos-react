import React from "react";
import ReactDOM from "react-dom";
import '../modal/crear-todo.css'

function CrearTodo({children}) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {CrearTodo}
