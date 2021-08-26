import React from "react";
import {TodoContext} from "../TodoContext/todoContext";
import {TodoCounter} from "../components/TodoCounter/TodoCounter";
import {TodoSearch} from "../components/TodoSearch/TodoSearch";
import {TodoList} from "../components/TodoList/TodoList";
import {TodoItem} from "../components/TodoItem/TodoItem";
import {CreateTodoButon} from "../components/CreateTodoButon/CreateTodoButon";
import {CrearTodo} from "../modal/crear-todo";
import {TodoForm} from "../form/todo-form";

// function AppUI({
//                    error,
//                    loading,
//                    totalTodos,
//                    completedTodos,
//                    searchValue,
//                    setSearchValue,
//                    searchedTodos,
//                    completeTodos,
//                    deleteTodos
//                }) {

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)
    // return (
    //     <React.Fragment>
    //         <TodoCounter
    //             total={totalTodos}
    //             completed={completedTodos}
    //         />
    //         <TodoSearch
    //             searchValue={searchValue}
    //             setSearchValue={setSearchValue}
    //         />
    //         <TodoList>
    //             {error && <p>boom valio hahahahah</p>}
    //             {loading && <p>Estamos cargando, hahahah</p>}
    //             {(!loading && !searchedTodos.length) && <p>Create este hahah</p>}
    //             {searchedTodos.map(todo => (
    //                 <TodoItem
    //                     key={todo.text}
    //                     text={todo.text}
    //                     completed={todo.completed}
    //                     onComplete={() => completeTodos(todo.text)}
    //                     onDelete={() => deleteTodos(todo.text)}
    //                 />
    //             ))}
    //         </TodoList>
    //         <CreateTodoButon/>
    //     </React.Fragment>
    // )

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
                {error && <p>boom valio hahahahah</p>}
                {loading && <p>Estamos cargando, hahahah</p>}
                {(!loading && !searchedTodos.length) && <p>Create este hahah</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        onDelete={() => deleteTodos(todo.text)}
                    />
                ))}
            </TodoList>
            {!!openModal && (
                <CrearTodo>
                    <p>hahah modal </p>
                    <TodoForm>
                    </TodoForm>
                </CrearTodo>
            )}
            <CreateTodoButon
            setOpenModal={setOpenModal}/>
        </React.Fragment>
    )
}

export {AppUI}
