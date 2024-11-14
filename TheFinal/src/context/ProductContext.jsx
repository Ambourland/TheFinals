import { createContext, useState, useEffect } from "react";
import { getProductList } from "../utils/product";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList().then((res) => {
      setProducts(res);
    });
  }, []); // Ensure this is empty to only run on mount

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };