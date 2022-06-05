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

  function search(rows){
    const colums = rows[0] && Object.keys(rows[0])
    return rows.filter(
      (row) => 
      //first filter method
     // row.firstName.toLowerCase().indexOf(q)> -1 ||
    //  row.lastName.toLowerCase().indexOf(q)> -1
       colums.some((column) => row[column].toString.toLowerCase().indexOf(q.toLowerCase) > -1)
      );
      
  }

  return (
    <div>
      <div>
        <input type = "text" value={q} onChange = {
          (e) => setQ(e.target.value)
        }/>
      </div>
      <div>
        <Datatable data ={search(data)}/>
      </div>
    </div>
  );
}

export default App;
