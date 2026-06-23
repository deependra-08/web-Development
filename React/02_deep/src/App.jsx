import Button from './components/button/Button'
import './App.css'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className="parent">
      <div className="btn">
        <Button>click me</Button>
      </div>
      <div className="header">
        <Header />
      </div>
    </div>
  )
}

export default App