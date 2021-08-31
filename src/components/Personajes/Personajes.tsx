import React from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {connect} from "react-redux";
import * as personajeActions from '../../actions/personajeActions'

function Personajes(props: any) {

    // const [personajes, setPersonajes] = React.useState(
    //     [
    //         {
    //             id: 1,
    //             gender: 'haha',
    //             name: '',
    //             image: '',
    //             species: '',
    //             status: '',
    //             location: {
    //                 name: ''
    //             },
    //             origin: {
    //                 name: ''
    //             }
    //         }
    //     ]
    // )

    React.useEffect(() => {
        // (async () => {
        //     const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
        //     console.log(respuesta);
        //     setPersonajes(respuesta.data.results)
        // })()
        props.traerTodos();
    }, [])

    const imagesTabla = (rowData: any) => {
        return <img src={rowData.image} alt="" width='60%'/>
    }

    console.log(props)

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
                    </DataTable>
                </div>
            </div>
            <div className="col-sm-2"/>
        </div>
    )
}

const mapStateToPros = (state: any)=>{
    return state.personajeReducer
}

export default connect(mapStateToPros, personajeActions)(Personajes)
