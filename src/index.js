import React from 'react';
import {render} from 'react-dom';
import ExportDataSite from './components/Export-data-Site'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default function App() {

  return (
    //Style all application
    <div className="container-fluid">
      {/*Header style*/}
      <div className="alert-dark">
        <h1>Phone book</h1>
      </div>
      {/*Request all format data*/}
      <ExportDataSite/>
    </div>
  )
}
//sent application to html by elementId
render(<App/>, document.getElementById('root'));