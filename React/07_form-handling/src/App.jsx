import React from 'react'

const App = () => {
  const ipchange=(e)=>{
    e.preventDefault();
    console.log("Betrayal");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        ipchange(e);
        }}>
        <input type="text" placeholder='Enter Your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App