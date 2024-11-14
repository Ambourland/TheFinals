import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Your Cart</Typography>
      
     

      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
              <Typography>{item.title}</Typography>
              <Typography>${item.price}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
            <Typography variant="h6">Total: ${getTotalPrice()}</Typography>
            <Button variant="contained" color="primary" onClick={clearCart}>
              Clear Cart
            </Button>
             {/* Back Button */}
      <Button 
        variant="outlined" 
        onClick={() => navigate(-1)} // Go back to the previous page
        sx={{ mb: 2 }}
      >
        Back
      </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Cart;