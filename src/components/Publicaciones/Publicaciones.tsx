import React from "react";
import {connect} from "react-redux";
import * as personajeActions from '../../actions/personajeActions'
import * as publicacionActions from "../../actions/publicacionActions";
const {traerTodos: traerTodosPersonajes} = personajeActions
const {traerTodos: traerTodosPublicaionez} = publicacionActions


function Publicaciones(props: any) {

    const {id} = props.match.params

    console.log(props)
    console.log(props.personajeReducer.personajes.length <= 0)

    React.useEffect(() => {
        if(props.personajeReducer.personajes.length <= 0){
            console.log('entre')
            props.traerTodosPersonajes();
        }
    }, [])

    // console.log(props)

    return (
        <div>
            <h1>Publicaciones {id}</h1>
            <h2>Publicaciones de {props.personajeReducer.personajes[id - 1].name}</h2>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {personajeReducer: state.personajeReducer, publicacionReducer: state.publicacionReducer}
}

const mapDispatchToProps = {
    traerTodosPersonajes,
    traerTodosPublicaionez
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones)
