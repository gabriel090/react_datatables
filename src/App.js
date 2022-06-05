import React,{useState, useEffect} from 'react';
import Datatable from "./datatable";
import './App.css';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then((json) => setData(json));
  },[]);

  return (
    <div>
      <div>filter goes here</div>
      <div>
        <Datatable data ={data}/>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
   
    //   </header>
    // </div>
  );
}

export default App;
