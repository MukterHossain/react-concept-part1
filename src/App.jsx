
import {useEffect, useState } from 'react'
import './App.css'
import Products from './components/Products/Products';

function App() {
  // const [name, setName] = useState();
  const [products, setProducts] = useState([])
// let control = false;
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setProducts(data))
    
  }, [])
  return (
    <>
      <h1>Main APp js</h1>
      
    {
      products.map(item =>(
        
          <Products item={item}></Products>
       
      ))
    }
    </>
  )
}

export default App
