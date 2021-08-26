import React from "react";
import { Button } from "./components/button/Button";
import { HolaMundo } from "./components/hola-mundo/HolaMundo";
import {Header} from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <React.Fragment>
      <Header />
      <HolaMundo msg="Hola perros" />
      <Button nombreBoton="botonnnnn" />
    </React.Fragment>
  );
}

export default App;
