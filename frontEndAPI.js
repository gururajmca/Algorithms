
const PRODUCT_URL = 'https://dummyjson.com/products?limit=5&skip=0';
//searching product 'https://dummyjson.com/products/search?q=iphone';
//searching product 'https://dummyjson.com/products?limit=5&skip=0';
const getAllProducts = async ()=> {
  const res = await fetch(PRODUCT_URL);
  return res.json(res);
}

// API Call
productList = getAllProducts();
productList.then((res) => {
    console.log(res);
});
