import React from 'react';
import './App.css';
import {Toso} from './container/Toso';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)



function App() {
  return (
    <div className="App">
    <h1 className ="text-center">TO DO APP</h1>
    <Toso/> 
    
    <h1>FINISH</h1>
    </div>
  );
}

export default App;
