import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div> 
      <h2>This Is React-Router-Dom</h2>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/billu" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App