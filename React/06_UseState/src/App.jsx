import React,{useState} from 'react';

const App = () => {
  const [num,setNum] = useState(0);
  const increaseNum = ()=>{
    setNum(num+1);
  }

  const decreaseNum = () =>{
    setNum(num-1);
  }
  return (
    <div className="app">
      <h1>{num}</h1>
      <div className="button-row">
        <button onClick={increaseNum}>INCREASE</button>
        <button onClick={decreaseNum}>DECREASE</button>
      </div>
    </div>
  )
}

export default App