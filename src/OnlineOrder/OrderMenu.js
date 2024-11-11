import React, { useState, useEffect } from 'react';
import '../css/orderMenu.css';
import axios from 'axios';
import productsData from './products.json';

export default function OrderMenu() {
  const [listProducts, setListProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('/products.json')  
      .then(response => setListProducts(response.data))
      .catch(error => console.error("Error fetching product data:", error));
  }, []);

  const toggleCart = () => setShowCart(!showCart);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(item => item.product_id === product.id);
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product_id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image }];
      }
    });  
  };

  const updateQuantity = (product_id, amount) => {
    setCart(prevCart => 
      prevCart.map(item => item.product_id === product_id 
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) } 
        : item
      )
    );
  };

  const removeFromCart = (product_id) => {
    setCart(prevCart => prevCart.filter(item => item.product_id !== product_id));
  };

  return (
    <div className="order-menu">
      <div className="container">
        <h1 className="Order">Order</h1>

        {/* Display Products */}
        <div className="product-list">
          <h2 className="RamenTitle">Ramen</h2>
          {listProducts.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="Flavour">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <h4 className="price">${product.price}</h4>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Icon */}
        <div className="icon-cart" onClick={toggleCart}>
          <svg className="iconCart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
          </svg>
          <span>{cart.length}</span>
        </div>

        {/* Cart Overlay */}
        {showCart && (
          <div className="cartTab">
            <h1>Shopping Cart</h1>
            <div className="listCart">
              {cart.map(item => (
                <div key={item.product_id} className="cart-item">
                  <div className="image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="totalPrice">${(item.price * item.quantity).toFixed(2)}</div>
                  <div className="quantity">
                    <button className="minus" onClick={() => updateQuantity(item.product_id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="plus" onClick={() => updateQuantity(item.product_id, 1)}>+</button>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.product_id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
            <div className="btn">
              <button className="close" onClick={toggleCart}>CLOSE</button>
              <button className="checkOut">CHECK OUT</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
