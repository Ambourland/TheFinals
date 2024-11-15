import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductDetailsById } from '../utils/product';
import { Box, Button } from '@mui/material';
import { useCart } from '../context/CartContext'; // Import CartContext

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    getProductDetailsById(id).then((res) => {
      setProductDetails(res);
    });
  }, [id]);

  return (
    <Box display="flex" justifyContent="space-around" sx={{ height: '100vh' }}>
      <Box sx={{ height: '100vh', width: '50%' }}>
        <img id='image' src={productDetails.image} alt={productDetails.title} />
      </Box>
      <Box sx={{ p: 5 }}>
        <div id='border'>
           <p>{productDetails.title}</p>
        <p>${productDetails.price}</p>
        <p>{productDetails.description}</p>
        </div>
       
        <Button onClick={() => addToCart(productDetails)}>Add to Cart</Button>
        <br />

        {/* Back Button */}
        <Button 
          variant="outlined" 
          onClick={() => navigate(-1)} // Go back to the previous page
          sx={{ mt: 2 }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;