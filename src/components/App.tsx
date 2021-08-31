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
        code: 'haha',
        name: '',
        category: '',
        quantity: ''
      }
    ]
  )
  React.useEffect( ()=>{
    (async () => {
      const respuesta = await axios.get('https://rickandmortyapi.com/api/character')
      console.log(respuesta);
      
    })()    
  
  }, [])

  console.log(data);
  

  return (
    <>
      <div>
        <div className="card">
          <DataTable value={data}>
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
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
