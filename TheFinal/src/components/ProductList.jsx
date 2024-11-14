import { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import truncateString from '../utils/truncateString';

const ProductList = () => {
  const { products } = useContext(ProductContext); // Get products from ProductContext
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [categoryFilter, setCategoryFilter] = useState(''); // Category filter state
  const [sortOrder, setSortOrder] = useState(''); // Sort order state (low to high, high to low)
  
  const navigate = useNavigate(); // Initialize navigate to handle routing

  // Get unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filter products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  // Sort products based on the selected sort order (low to high, high to low)
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOrder === 'highToLow') {
      return b.price - a.price;
    }
    return 0; // No sorting
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        {/* Search Input */}
        <TextField
          label="Search Products"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          sx={{ maxWidth: '400px' }}
        />

        {/* Category Filter Dropdown */}
        <FormControl fullWidth sx={{ maxWidth: '200px' }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Sort Dropdown */}
        <FormControl fullWidth sx={{ maxWidth: '200px' }}>
          <InputLabel>Sort by Price</InputLabel>
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            label="Sort by Price"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="highToLow">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Product List */}
      <Box display="flex" flexWrap="wrap" gap={2}>
        {sortedProducts.length === 0 ? (
          <Box sx={{ width: '100%' }}>
            <p>No products found</p>
          </Box>
        ) : (
          sortedProducts.map((item) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 150,
                padding: 20,
                height: 350,
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => navigate(`/product-details/${item.id}`)} // Navigate to product details page on click
            >
              <img src={item.image} alt={item.title} />
              <h3>{truncateString(item.title, 20)}</h3>
              <p>{item.rating.rate}</p>
              <p>${item.price}</p>
            </div>
          ))
        )}
      </Box>
    </Box>
  );
};

export default ProductList;