import React, { useState, useEffect } from 'react';
import '../css/orderMenu.css';
import axios from 'axios';

export default function OrderMenu() {
  const [listProducts, setListProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Fetch products data
  useEffect(() => {
    axios.get('/products.json')  // Ensure this path is correct
      .then(response => setListProducts(response.data))
      .catch(error => console.error("Error fetching product data:", error));
  }, []);

  // Toggle cart visibility
  const toggleCart = () => setShowCart(!showCart);

  // Add product to cart
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

  // Update quantity in cart
  const updateQuantity = (product_id, amount) => {
    setCart(prevCart => 
      prevCart.map(item => item.product_id === product_id 
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) } 
        : item
      )
    );
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
