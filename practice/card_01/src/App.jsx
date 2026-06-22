import React from 'react'
import {Bookmark} from 'lucide-react'


const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>MONKEY INTERNATIONAL <span>10 Days Ago</span></h3>
          <h2>Acitva Rental</h2>
        </div>
        <div className="bottom">
            <div >
              <h3>RS.1000/Day</h3>
              <p>Agra,India</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App