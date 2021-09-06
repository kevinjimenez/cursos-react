import React from "react";
import { connect } from "react-redux";
import * as personajeActions from "../../actions/personajeActions";
import * as publicacionActions from "../../actions/publicacionActions";
const { traerTodos: traerTodosPersonajes } = personajeActions;
const { traerPorUsuario: publicaionezTraerPorUsuario } = publicacionActions;

function Publicaciones(props: any) {
  const { id } = props.match.params;
  React.useEffect(() => {
    if (!props.personajeReducer.personajes.length) {
      console.log('entre')
      const getPersonajes = async () => {
        await props.traerTodosPersonajes();
      };
      getPersonajes();
    }

    props.publicaionezTraerPorUsuario(id)
  }, []);

  console.log(props);

  return (
    <div>
      <h1>Publicaciones {id}</h1>
      {/* <h2>Publicaciones de {props.personajeReducer.personajes[id - 1].name}</h2> */}
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    personajeReducer: state.personajeReducer,
    publicacionReducer: state.publicacionReducer,
  };
};

const mapDispatchToProps = {
  traerTodosPersonajes,
  publicaionezTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);
