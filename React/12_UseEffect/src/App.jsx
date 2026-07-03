import React from 'react'
import { useEffect,useState } from 'react';

const App = () => {
  localStorage.clear();
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  function achanging(){
    console.log("Value of a changes");
  }
  function bchanging(){
    console.log("Value of b changes");
  }
  useEffect(function(){
    achanging();
    console.log("Use Effect is Fcuked Up!!!");
  },[a])
  return (
    <div>
      <h1>A value is {a}</h1>
      <h1>B value is {b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }}>A</button>
      <button onClick={()=>{
        setB(b+1);
      }}>B</button>
    </div>
  )
}

export default App