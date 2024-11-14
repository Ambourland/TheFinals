import React from 'react';
import { useCart } from '../context/CartContext';
import { Box, Button, Typography } from '@mui/material';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart(); // Get cartItems and functions from context

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Your Cart</Typography>
      <Box>
        {cartItems.length === 0 ? (
          <Typography>No items in your cart</Typography>
        ) : (
          <Box>
            {/* Display cart items */}
            {cartItems.map((item) => (
              <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <img src={item.image} alt={item.title} style={{ maxWidth: '50px' }} />
                <Box sx={{ ml: 2 }}>
                  <Typography>{item.title}</Typography>
                  <Typography>${item.price}</Typography>
                  <Button onClick={() => removeFromCart(item.id)} variant="outlined" color="error">
                    Remove
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Clear Cart Button */}
      {cartItems.length > 0 && (
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ mt: 3 }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      )}
    </Box>
  );
};

export default Cart;