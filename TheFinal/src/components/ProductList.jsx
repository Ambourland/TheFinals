import { useState, useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Box, TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import truncateString from '../utils/truncateString';

const ProductList = () => {
  const { products } = useContext(ProductContext); // Get products from ProductContext
  const [searchQuery, setSearchQuery] = useState(''); // Search query state
  const [categoryFilter, setCategoryFilter] = useState(''); // Category filter state

  // Get unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];

  // Filtered products based on search query and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
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
      </Box>

      {/* Product List */}
      <Box display="flex" flexWrap="wrap" gap={2}>
        {filteredProducts.length === 0 ? (
          <Box sx={{ width: '100%' }}>
            <p>No products found</p>
          </Box>
        ) : (
          filteredProducts.map((item) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: 150,
                padding: 20,
                height: 350,
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              key={item.id}
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