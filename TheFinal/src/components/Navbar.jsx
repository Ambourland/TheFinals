import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Import cart icon
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import CartContext to access cart items

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function
  const { cartItems } = useCart(); // Access cart items from CartContext

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar id="nav" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Home Button */}
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Angies Shop
          </Typography>

          <Button color="inherit">Login</Button>

          {/* Cart Icon with Item Count */}
          <IconButton
            color="inherit"
            onClick={() => navigate('/cart')}
            sx={{ position: 'relative' }}
          >
            <ShoppingCartIcon />
            {cartItems.length > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  bgcolor: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 12,
                }}
              >
                {cartItems.length}
              </Box>
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;