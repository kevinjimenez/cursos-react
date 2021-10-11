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
  return (
    <>
      <TodoHeader />
      <TodoList />
    </>
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
  return <p>TodoCounter</p>;
}

function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem() {
  return <p>TodoItem</p>;
}

export default App;
