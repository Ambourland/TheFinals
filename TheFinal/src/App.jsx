import Card from './components/Card'
import './App.css'
import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'

function App() {
 

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element={<ProductList />} path="/home"/>
      <Route element={<ProductDetails />} path="/product-details"/>
      <Route element={<Cart />} path="/cart"/>
    </Routes>
     <Card />
    </BrowserRouter>
  )
}

export default App
