const getProductList = async () => {
    try {
       
        const res = await fetch("https://fakestoreapi.com/products")
        return res.json()
       
    }catch(error){
        console.error(error)
    }
}

const getProductDetailsById = async (id) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/" + id);
      return response.json();
    } catch (error) {
      console.error(error);
    }
  };

export  {getProductList, getProductDetailsById}