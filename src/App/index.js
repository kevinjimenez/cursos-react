import React from "react";
// import { TodoProvider } from "../TodoContext";
// import { AppUI } from "./AppUI";

// function App() {
//   // return (
//   //   <TodoProvider>
//   //     <AppUI />
//   //   </TodoProvider>
//   // );
// }

function App() {
  // TODO: para poder compartir con la app
  const [state, setState] = React.useState("estado compartido");

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>
      <TodoList>
        <TodoItem state={state}/>
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({children}) {
  return (
    <section className='TodoList-container'>
      {children}
    </section>
  );
}

function TodoCounter() {
  // const [state] = React.useContext(TodoProvider);
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({state}) {
  return <p>TodoItem: {state}</p>;
}

export default App;
