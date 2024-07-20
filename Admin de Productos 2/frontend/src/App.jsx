import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import './App.css';

const App = () => {
  const [newProduct, setNewProduct] = useState(null);

  const handleProductCreated = (product) => {
    setNewProduct(product);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <ProductForm onProductCreated={handleProductCreated} />
            <ProductList newProduct={newProduct} />
          </>
        } />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


