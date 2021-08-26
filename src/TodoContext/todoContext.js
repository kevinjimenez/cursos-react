import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    // const [todos, setTodos] = React.useState(parseTodos);
    // const [name, setName] = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        // searchedTodos = todos.filter(todo => todo.text.toLowerCase() === searchValue.toLowerCase())
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase()
            const searchText = searchValue.toLowerCase()
            return todoText.includes(searchText);
        });
    }

    const addTodos = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        })
        setTodos(newTodos)
    }

    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true
        setTodos(newTodos)
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
    }

    console.log('render')


    // // sin el arreglo vacio se renderixa cada vez q escuche un cambio
    // React.useEffect(()=>{
    //     console.log('aqui esta usanso hock useEfecct')
    // }, [totalTodos]);

    console.log('render despues del use efect')


    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodos,
                addTodos,
                openModal,
                setOpenModal,
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}
