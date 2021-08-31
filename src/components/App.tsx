import React from "react";
import logo from "../logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from 'axios'

function App() {

  const [data, setData] = React.useState(
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
  React.useEffect( ()=>{
    (async () => {
      const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
      console.log(respuesta);
      setData(respuesta.data.results)
    })()    
  }, [])

  console.log(data);

  const columns = [
    {field: 'image', header: 'Code'},
    {field: 'name', header: 'Name'},
    {field: 'gender', header: 'Category'},
    {field: 'species', header: 'Quantity'},
    {field: 'status', header: 'Quantity'}
];

  const dynamicColumns = columns.map((col,i) => {
    console.log('col.field');
    console.log(col.field);
    return <Column key={col.field} field={col.field} header={col.header} />;
});

  return (
    <>
      <div>
        <div className="card">
          <DataTable value={data}>
           {dynamicColumns}
          </DataTable>
        </div>
      </div>
      <Button label="Primary" />
      <Button label="Secondary" className="p-button-secondary" />
      <Button label="Success" className="p-button-success" />
      <Button label="Info" className="p-button-info" />
      <Button label="Warning" className="p-button-warning" />
      <Button label="Danger" className="p-button-danger" />
      <div className="row">
        <div
          className="col-sm-6"
          style={{
            backgroundColor: "red",
          }}
        >
          <h1>haha</h1>
        </div>
        <div
          className="col-sm-6"
          style={{
            backgroundColor: "blue",
          }}
        >
          <h1>haha</h1>
        </div>
      </div>
    </>
  );
}

export default App;
