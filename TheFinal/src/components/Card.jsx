// product cards function
import { useState,useEffect, } from 'react'
import { ProductList } from '../utils/product'




const Card= () => {
    const [product, setProduct] = useState([])


  useEffect(() => {
   ProductList().then((res) => {
    setProduct(res)
    console.log(res)
   })
  }, [])
    return (
        <div>
    <h1>Shopping Page</h1>
    {product.map((item) => (
        <div key={item.id} className="card">
            <img src={item.image} alt={item.title} className="card-image" />
            <h2 className="card-title">{item.title}</h2>
            <h4 className="card-price">${item.price}</h4>
        </div>
    ))}
</div>
    )}

    export default Card