import React from 'react'

const App = () => {
  const user = {
    'user':'Deependra Singh',
    'age':20,
    'Religion':'Hindu'
  };
  localStorage.setItem('user',JSON.stringify(user));
  const lamda = JSON.parse(localStorage.getItem('user'));
  console.log(lamda);
  return (
    <div>Deependra Singh Gurjar</div>
  ) 
}

export default App