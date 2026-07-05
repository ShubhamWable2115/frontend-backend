import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react' 

function App() {
  const [products, setProducts] = useState([]);
 
  useEffect(()=>{
    axios.get('/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <>
    <h1>Hello, Vite!</h1>
    <p>Products: {products.length}</p>
    {
      products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h3>Price: {product.price}  </h3>
        </div>
      ))
  }
    </>
  )
}

export default App
