import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
  const users = [
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB_SAz73BU8ZB48wK9iXGqvTfldmq7Jpf6drCcB7QROA&s=10',
      intro:'',
      tag:'Satiesfied'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQa0RW2PGbNxKdqSWCe-R9VTHw6Q90dqmmdwOGkSAOA&s=10',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6MpJ9M6qvId88daZm-1Ons0nX8uaNS2vcB79wvQdxgQ&s=10',
      intro:'',
      tag:'underbanked'
    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCYxQrKnatEt7QhcGTgysMNpTwonEdqBDd4ssKCNZmA&s=10',
      intro:'',
      tag:'Model'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App 