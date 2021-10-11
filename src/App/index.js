import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

// function App() {
//   // return (
//   //   <TodoProvider>
//   //     <AppUI />
//   //   </TodoProvider>
//   // );
// }

function App() {
  // TODO: para poder compartir con la app
  const [state, setState] = React.useState("");

  return (
    <TodoProvider>
      <>
        <TodoHeader />
        <TodoList />
      </>
    </TodoProvider>
  );
}

function TodoHeader() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
    </>
  );
}

function TodoList() {
  return (
    <>
      <TodoItem />
    </>
  );
}

function TodoCounter() {
  const [state] = React.useContext(TodoProvider);
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem() {
  return <p>TodoItem</p>;
}

export default App;
