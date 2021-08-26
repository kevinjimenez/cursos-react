import React from "react";
import { Button } from "./components/button/Button";
import { HolaMundo } from "./components/hola-mundo/HolaMundo";

function App() {

  return (
    <React.Fragment>
      <HolaMundo msg="Hola perros" />
      <Button nombreBoton="botonnnnn" />
    </React.Fragment>
  );
}

export default App;
