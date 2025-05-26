import { useState } from "react";
import "./App.css";

function App() {

  let [counter,setcounter]= useState(15);
  // let counter=5;

const addValue=()=>{
  if(counter<20){

    counter=counter+1;
    setcounter(counter);
    console.log(counter);
  }
}

const removeValue=()=>{
  if(counter>0){
    counter=counter-1;
    setcounter(counter);
    console.log(counter);
  }
}

  return <>
  <h1>Chai aur React</h1>
  <h2>Counter value:{counter}</h2>
  <button onClick={addValue}>Add value</button>
  <button onClick={removeValue}>Remove value</button>
  </>
}

export default App;
