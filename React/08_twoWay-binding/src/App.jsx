import React,{useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const stchange=(e)=>{
    e.preventDefault();
    console.log("Form Submitted",title);
    setTitle('');
  }
  return (
    <div>
      <form onClick={(e)=>{
        stchange(e);
      }}>
        <input type="text"  value={title} placeholder='FCUK YOU' onChange={(e)=>{
          setTitle(e.target.value)
        }}/>
        <button>SUBMIT</button>
      </form>
    </div>
  )
}

export default App