import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Main from './components/main/Main'
import Wishlist from './components/wishlist/Wishlist'
import { useEffect, useState } from 'react'
let url = 'https://dummyjson.com/products'
function App() {
  const [product,setProduct] = useState([])
    const fetchdata = async () => {
       try {
        const resp = await fetch(url)
        const data = await resp.json()
        setProduct(data)
       } catch (error) {
        console.log(error);
       }
      }
    useEffect(() => {
    fetchdata()
    },[])
  return (
    <> 
        <Header product={product.products} />
        <div className="container">
          <Routes>
            <Route path='/' element={
              <>
                <Hero />
                <Main product={product} />
              </>
            } />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes>
        </div>
    </>
  )
}

export default App
