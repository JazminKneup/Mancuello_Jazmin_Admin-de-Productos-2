import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = ({ newProduct }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:8000/api/products');
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (newProduct) {
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
  }, [newProduct]);

  return (
    <div className="product-list">
      <h2>All Products:</h2>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;