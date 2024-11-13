import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductDetailsById } from "../utils/product"

const ProductDetails = () => {
    const[productDetails, setProductDetails] = useState([])

    const {id} = useParams()

    useEffect(() => {
        getProductDetailsById(id).then((res) => {
            setProductDetails(res)
        })
    }, [])
    return (
        <div>Product Details</div>
    )
}

export default ProductDetails