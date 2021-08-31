import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import  { Redirect, Link } from 'react-router-dom'

function Tabla(props: any) {

    const imagesTabla = (rowData: any) => {
        return <img src={rowData.image} alt="" width='60%'/>
    }

    const handlerAccion = (data: any) => {
        console.log(data)
        // props.history.push(`/publicaciones/${data.id}`)
        // return <Redirect to={`/publicaciones/${data.id}`}  />

    }

    const accionTabla = (rowData: any) => {
        // return <button className='btn btn-primary' onClick={() => handlerAccion(rowData)}> accion </button>
        return <Link to={`/publicaciones/${rowData.id}`} className='btn btn-primary' > accion </Link>
    }


    const ponerContenido = () => {
        if (props.cargando)
            return <h1>Cargando</h1>


        if (props.error)
            return <h1>{props.error}</h1>


        return (
            <div className="row">
                <div className="col-sm-2"/>
                <div className="col-sm-8">
                    <div className="card">
                        <DataTable value={props.personajes}
                                   paginator
                                   rows={10}
                                   totalRecords={props.personajes.length}
                        >
                            <Column field="image" header="Ilustracion" body={imagesTabla}/>
                            <Column field="name" header="Nombre"/>
                            <Column field="gender" header="Genero"/>
                            <Column field="species" header="Especie"/>
                            <Column field="status" header="Estado"/>
                            <Column field="id" header="Acciones" body={accionTabla}/>
                        </DataTable>
                    </div>
                </div>
                <div className="col-sm-2"/>
            </div>
        )
    }

    return(
        <div>
            {ponerContenido()}
        </div>
    )
}

const mapStateToPros = (state: any) => {
    return state.personajeReducer
}

export default connect(mapStateToPros, {})(Tabla)
