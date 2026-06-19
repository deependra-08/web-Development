import React from 'react'
import './index.css';
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10" alt="" />
          <button>Save <Bookmark size={12}/></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 Days Ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
        </div>
        <div className="bottom">
          <div >
              <h3>$120/hr</h3>
              <p>Mumbai,India</p>
            </div>
            <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App  