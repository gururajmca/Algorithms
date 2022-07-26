
const PRODUCT_URL = 'https://api.gousto.co.uk/products/v2.0/categories';

const getAllProducts = async ()=> {
  const res = await fetch(PRODUCT_URL);
  return res.json(res);
}

productList = getAllProducts();
