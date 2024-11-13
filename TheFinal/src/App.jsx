
import './App.css'
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { ProductProvider } from './context/ProductContext'

function App() {


  return (
    <BrowserRouter>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route element={<ProductList />} path="/" />
          <Route element={<ProductDetails />} path="/product-details/:id"/>
          <Route element={<Cart />} path="/cart" />
        </Routes>
      </ProductProvider>

    </BrowserRouter>
  )
}

export default App
