import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:8000/api/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductDetails;
