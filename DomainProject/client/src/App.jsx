import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { useState } from 'react';

function App() {

  let [data,setdata]=useState([])


  let handledata  =()=>{

    axios.get("https://jsonplaceholder.typicode.com/users/1").then((responts)=>{
      console.log(responts.data);
      setdata(responts.data)
    })
    .catch((error )=>{
  
      console.log(error );
  
    })
  }

  return (
    <div className="">


      <h1>Saleel is a good boy </h1>  
  <button onClick={handledata}> show data </button>
      <h1>name: {data.name}</h1>
      <h1>place : {data.username}</h1>
    </div>
    
  );
}

export default App;
