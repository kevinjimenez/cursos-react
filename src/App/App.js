// import './App.css';
import React from "react";
import {AppUI} from "./AppUI";
import {TodoProvider} from "../TodoContext/todoContext";

// const defaultTodos = [
//     {text: 'Cortar cebolla', completed: true},
//     {text: 'comm', completed: false},
//     {text: 'jooo', completed: true},
//     {text: 'hahah', completed: false}
// ]

// react hook custom
// function useLocalStorage(itemName, inicialValue) {
//     // estado error
//     const [error, setError] = React.useState(false)
//
//     // estado carga
//     const [loading, setLoading] = React.useState(true)
//
//
//     // react hook estado inicial stateFull
//     const [item, setItem] = React.useState(inicialValue)
//
//     // sin el arreglo vacio se renderixa cada vez q escuche un cambio
//     React.useEffect(() => {
//         console.log('aqui esta usanso hock useEfecct')
//         setTimeout(() => {
//
//             try {
//                 const localStorageItem = localStorage.getItem(itemName);
//                 let parseItem;
//
//
//                 if (!localStorageItem) {
//                     localStorage.setItem(itemName, JSON.stringify(inicialValue))
//                     parseItem = inicialValue;
//                 } else {
//                     parseItem = JSON.parse(localStorageItem);
//                 }
//
//                 // cambiando e estado
//                 setItem(parseItem);
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//             }
//
//         }, 1000)
//     },);
//
//
//     const saveItem = (newItem) => {
//
//         try {
//             const stringifiedItem = JSON.stringify(newItem);
//             localStorage.setItem(itemName, stringifiedItem)
//             setItem(newItem)
//         } catch (error) {
//             setError(error);
//         }
//     }
//
//
//     // si se retorna mas de 2 elementos se retoena un object
//     return {
//         item,
//         saveItem,
//         loading
//     }
// }

function App() {

    // const localStorageTodo = localStorage.getItem('TODOS_V1');
    // let parseTodos;
    //
    // if (!localStorageTodo){
    //     localStorage.setItem('TODOS_V1', JSON.stringify([]))
    //     parseTodos = [];
    // } else {
    //     parseTodos = JSON.parse(localStorageTodo);
    // }
    //
    // const saveTodos = (newTodos)=>{
    //     const stringifiedTodos = JSON.stringify(newTodos);
    //     localStorage.setItem('TODOS_V1', stringifiedTodos)
    //     setTodos(newTodos)
    // }

    // const {item: todos, saveItem: setTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    // // const [todos, setTodos] = React.useState(parseTodos);
    // // const [name, setName] = useLocalStorage('TODOS_V1', []);
    // const [searchValue, setSearchValue] = React.useState('')
    //
    // const completedTodos = todos.filter(todo => !!todo.completed).length;
    // const totalTodos = todos.length;
    //
    // let searchedTodos = [];
    // if (!searchValue.length >= 1) {
    //     searchedTodos = todos;
    // } else {
    //     // searchedTodos = todos.filter(todo => todo.text.toLowerCase() === searchValue.toLowerCase())
    //     searchedTodos = todos.filter(todo => {
    //         const todoText = todo.text.toLowerCase()
    //         const searchText = searchValue.toLowerCase()
    //         return todoText.includes(searchText);
    //     });
    // }
    //
    // const completeTodos = (text) => {
    //     const todoIndex = todos.findIndex(todo => todo.text === text);
    //     const newTodos = [...todos];
    //     newTodos[todoIndex].completed = true
    //     setTodos(newTodos)
    // }
    //
    // const deleteTodos = (text) => {
    //     const todoIndex = todos.findIndex(todo => todo.text === text);
    //     const newTodos = [...todos];
    //     newTodos.splice(todoIndex, 1)
    //     setTodos(newTodos)
    // }
    //
    // console.log('render')
    //
    //
    // // // sin el arreglo vacio se renderixa cada vez q escuche un cambio
    // // React.useEffect(()=>{
    // //     console.log('aqui esta usanso hock useEfecct')
    // // }, [totalTodos]);
    //
    // console.log('render despues del use efect')

    // return (
    //     <AppUI
    //         loading={loading}
    //         error={error}
    //         totalTodos={totalTodos}
    //         completedTodos={completedTodos}
    //         searchValue={searchValue}
    //         setSearchValue={setSearchValue}
    //         searchedTodos={searchedTodos}
    //         completeTodos={completeTodos}
    //         deleteTodos={deleteTodos}
    //     />
    // );

    return (
        <TodoProvider>
            <AppUI/>
        </TodoProvider>
    );
}

export default App;
