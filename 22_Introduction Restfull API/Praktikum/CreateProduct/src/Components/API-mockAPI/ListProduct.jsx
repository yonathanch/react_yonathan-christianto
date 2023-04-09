import axios from 'axios';
import { useState, useEffect } from 'react';

const ListProduct = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const response = await axios.get('https://64325b653e05ff8b3724ca6b.mockapi.io/Products');
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


    return (
      <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.productName}</h2>
          <p>{product.product_Category}</p>
          <p>{product.imageofProduct}</p>
          <p>{product.productFreshness}</p>
          <p>{product.additionalDescription}</p>
          <p>{product.productPrice}</p>
        </div>
      ))}
    </div>
  );
}
export default ListProduct;


