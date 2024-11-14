import { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { getProductDetailsById } from "../utils/product"
import {Box, Button} from "@mui/material"
import {CartContext} from "../context/CartContext"

const ProductDetails = () => {
    const[productDetails, setProductDetails] = useState([])

    const {id} = useParams()
    const { addToCart } = useContext(ProductContext)
    useEffect(() => {
        getProductDetailsById(id).then((res) => {
            setProductDetails(res)
        })
    }, [])
    return (
        <Box display="flex" justifyContent="space-around" sx={{ height: "100vh"}}>
            <Box sx={{ height: "100vh", width: "50%"}}>
                <img src={productDetails.image} />
            </Box>
            <Box sx={{p: 5}}>
                <p>{productDetails.title}</p>
                <p>${productDetails.price}</p>
                <p>{productDetails.description}</p>
                <Button onClick={() => {addToCart(productDetails)}}>Add to Cart</Button>
            </Box>
        </Box>
    )
}

export default ProductDetails