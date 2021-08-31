import React from "react";
import axios from "axios";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

function Personajes() {

    const [personajes, setPersonajes] = React.useState(
        [
            {
                id: 1,
                gender: 'haha',
                name: '',
                image: '',
                species: '',
                status: '',
                location: {
                    name: ''
                },
                origin: {
                    name: ''
                }
            }
        ]
    )
    React.useEffect(() => {
        (async () => {
            const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
            console.log(respuesta);
            setPersonajes(respuesta.data.results)
        })()
    }, [])

    const imagesTabla = (rowData: any) => {
        console.log('rowData')
        console.log(rowData)
        return <img src={rowData.image} alt="" width='40%'/>
    }

    return (
        <div className="row">
            <div className="col-sm-2"/>
            <div className="col-sm-8">
                <div className="card">
                    <DataTable value={personajes}
                               paginator
                               rows={10}
                               totalRecords={personajes.length}
                    >
                        <Column field="image" header="Image" body={imagesTabla}/>
                        <Column field="name" header="Name"/>
                        <Column field="gender" header="Price"/>
                        <Column field="species" header="Category"/>
                        <Column field="status" header="Reviews"/>
                    </DataTable>
                </div>
            </div>
            <div className="col-sm-2"/>
        </div>
    )
}

export {Personajes}
