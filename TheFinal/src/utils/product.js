const ProductList = async () => {
    try {
       
        const res = await fetch("https://fakestoreapi.com/products")
        return res.json()
       
    }catch(error){
        console.error(error)
    }console.log(res)
}


export  {ProductList}