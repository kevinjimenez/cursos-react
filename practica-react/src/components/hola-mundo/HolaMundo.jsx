import React from "react";
import '../hola-mundo/HolaMundo.scss'

function HolaMundo(props) {
  return (<div className='fondo'>
    <h1 className='HolaMundo'>{props.msg}</h1>
  </div>);
}

export {HolaMundo}
