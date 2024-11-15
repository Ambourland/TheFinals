import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { useCart } from '../context/CartContext';
import { Box, Button, Typography } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Get cartItems and functions from context
  const navigate = useNavigate(); // Initialize navigate to handle routing

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Box sx={{ p: 3 }}>
      {/* Back Button */}
      

      <Typography variant="h4" gutterBottom>Your Cart</Typography>

      {cartItems.length === 0 ? (
        <Typography>No items in your cart</Typography>
      ) : (
        <Box>
          {/* Display cart items */}
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <img id='cart-img' src={item.image} alt={item.title} style={{ maxWidth: '50px' }} />
              <Box sx={{ ml: 2 }}>
                <Typography id='wrap'>{item.title}</Typography>
                <Typography id='wrap'>${item.price}</Typography>
                <br />
                <Button id='remove-btn' onClick={() => removeFromCart(item.id)} variant="outlined" color="error">
                  Remove
                </Button>
                <br />
              </Box>
            </Box>
          ))}
        </Box>
      )} 
      

      {/* Display Total Price */}
      {cartItems.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">${totalPrice.toFixed(2)}</Typography>
        </Box>
        
      )}

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <Button id='clear-btn'
          variant="contained" 
          color="secondary" 
          sx={{ mt: 3 }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      )}
      <br/>
      <Button 
        variant="outlined" 
        onClick={() => navigate(-1)} // Navigate back to the previous page
        sx={{ mb: 3 }}
      >
        Back
      </Button>
    </Box>
    
  );
};

export default Cart;