import { createContext, useState, useEffect } from "react";
import { getProductList } from "../utils/api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };