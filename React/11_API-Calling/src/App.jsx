import { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data);
  }

  return (
    <div>
      <button onClick={getData}>CHECHI</button>
      <div>
        {data.map((item, index) => (
          <h3 key={index}>Hello {item.author}</h3>
        ))}
      </div>
    </div>
  )
}

export default App