import React, { useState } from 'react';
import '../css/orderMenu.css';
import axios from 'axios';
import { useEffect } from 'react';

export default function OrderMenu() {
    
     // Open and Clsoe the cart
     useEffect(() => {
      const iconCart = document.querySelector('.icon-cart');
      const closeCart = document.querySelector('.close');
      const body = document.querySelector('body');
      const listProductHTML = document.querySelector('.listProduct');
      const listCartHTML = document.querySelector('.listCart');
      const iconCartSpan = document.querySelector('.icon-cart span');

      const listProducts = [];
      const carts = [];

  
      // Define the function for toggling the cart's visibility
      const toggleCart = () => {
        body.classList.toggle('showCart');
      };
  
      if (iconCart) {
        iconCart.addEventListener('click', toggleCart);
      } else {
        console.error("Element with class '.icon-cart' not found!");
      }
  
      if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
      } else {
        console.error("Element with class '.close' not found!");
      }

      const addDataToHTML = () =>{
        listProductHTML.innerHTML = '';
        if(listProducts.length > 0){
          listProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.dataset.id = product.id;
            newProduct.innerHTML = `<img src="${product.image}" alt="..."></img>
              <div class="Flavour">
               <h5>${product.name}</h5>
               <p>Ramen cooked with miso broth, fresh vegetables, Bok Choy, Chashu Pork, Nitamago(Egg) </p>
               <h4 className="price">$${product.price}</h4>
               <a href="#" class="btn btn-primary">Add to cart</a>
               </div>`;
               listProductHTML.appendChild(newProduct);
          })
        }
      }
    
      const handleClick = (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains('btn-primary')) {
          let product_id = positionClick.parentElement.dataset.id;
          addToCart(product_id);
        }
      };

  
      // Attach the event listener if the element exists
      if (listProductHTML) {
        listProductHTML.addEventListener('click', handleClick);
      } else {
        console.error("Element with class '.list-product' not found!");
      }
  
      const addToCart = (product_id) => {
        let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
        if(carts.length <= 0) {
          carts = [{
            product_id: product_id,
            quantity: 1
          }]
        }else if(positionThisProductInCart < 0) {
          carts.push({
            product_id: product_id,
            quantity: 1
          })
        }else {
          carts[positionThisProductInCart].quantity = carts[positionThisProductInCart].quantity + 1;
        }
        addCartToHTML();
      }

      const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        if(carts.length >0){
          carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item')
          })
        }
      }

      const initApp = () => {
       // get data from json
       fetch('products.json')
       .then(response => response.json())
       .then(data => {
        listProducts = data;
        addDataToHTML();
       })

      }
      initApp();

      // Cleanup function to remove event listeners when the component unmounts
      return () => {
        if (iconCart) iconCart.removeEventListener('click', toggleCart);
        if (closeCart) closeCart.removeEventListener('click', toggleCart);
        if (listProductHTML) closeCart.removeEventListener('click', handleClick);
      };
    }, []);
  

    return (
<div class="">
 <div classname="container">

         <h1 className="Order">Order</h1>

            {/* RAMEN MENU */}
<div>
     <h2 className="RamenTitle">Ramen</h2>
      {/* Miso Ramen */}
     <div class="misoRamenOrder" >
            <img src="/Restaurant-src/MenuRamen1.jpg" class="card-img-top" alt="..."></img>
              <div class="Flavour">
               <h5>Miso Ramen</h5>
               <p>Ramen cooked with miso broth, fresh vegetables, Bok Choy, Chashu Pork, Nitamago(Egg) </p>
               <h4 className="price">$15.00</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>
     
     {/* Shio Ramen */}
     <div class="shioRamenOrder" >
       <img src="/Restaurant-src/MenuRamen2.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Shio Ramen</h5>
               <p>Delicated and light flavour of Shio, top with variety of vegetables and Chashu Pork</p>
               <h4 className="price">$15.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

     {/* Spicy Chicken Ramen */}
     <div class="spicyChickenRamenOrder" >
       <img src="/Restaurant-src/MenuRamen3.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Chicken Ramen</h5>
               <p>Rich and spicy broth, top with tender pieces of seasoned chicken and vegetables</p>
               <h4 className="price">$13.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

     {/* Spicy Tonkotsu Ramen */}
     <div class="spicyTonkotsuRamenOrder" >
       <img src="/Restaurant-src/MenuRamen4.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Tonkotsu Ramen</h5>
               <p>Classic, Tonkotsu Ramen cooked with pork bone broth with Chashu Pork and vegetables</p>
               <h4 className="price">$15.99</h4>
               <button class="btn btn-primary">Add to cart</button>       
        </div>
     </div>

     {/* Wonton Chicken Ramen */}
     <div class="wontonChickenRamenOrder" >
       <img src="/Restaurant-src/MenuRamen5.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Wonton Chicken Ramen</h5>
               <p>Chicken broth with delicate chicken-filled wonton, topped with vegetables mushrooms</p>
               <h4 className="price">$13.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>
     
</div>

{/* SMALL PLATES MENU */}
 <div>
     <h2 className="SmallPlatesTitle">Small Plates</h2>
      {/* Edamame */}
     <div class="edamameOrder" >
       <img src="/Restaurant-src/MenuEdamame.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Edamame</h5>
               <p className="edamameDescriptionOrder">Lightly salted and boiled soybeans</p>
               <h4 className="price">$3.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>
     
      {/* Salmon */}
      <div class="salmonOrder" >
       <img src="/Restaurant-src/MenuSalmon.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Salmon</h5>
               <p className="salmonDescriptionOrder">Fresh salmon with soysauce fused with Jalapeno</p>
               <h4 className="price">$11.00</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

     {/* Steamed Buns */}
     <div class="bunsOrder" >
       <img src="/Restaurant-src/MenuSteamedBuns.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Steamed Buns</h5>
               <p className="bunsDescriptionOrder">Soft, fluffy steamed buns filled with tender pork cooked with soy sauce</p>
               <h4 className="price">$7.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

     {/* Gyoza */}
     <div class="gyozaOrder" >
       <img src="/Restaurant-src/MenuGyoza.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Gyoza</h5>
               <p className="gyozaDescriptionOrder">Crispy, juicy savory Japanese gyoza</p>
               <h4 className="price">$7.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

     {/* Takoyaki */}
     <div class="takoyakiOrder" >
       <img src="/Restaurant-src/MenuTakoyaki.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Takoyaki</h5>
               <p className="takoyakiDescriptionOrder">Golden and bite-sized balls filled with tender pieces of octopus</p>
               <h4 className="price">$8.99</h4>
               <button class="btn btn-primary">Add to cart</button>
               </div>
     </div>

 

     {/* ORDER CART */}

     <div className="icon-cart">
      <svg className="iconCart" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
      </svg>
      <span>0</span>
     </div>

  </div>

  <div class="cartTab">
      <h1>Shopping Cart</h1>
      <div class="listCart">
         <div class="item">
          <div class="image">
            <img src="/Restaurant-src/MenuRamen1.jpg" alt=""></img>
          </div>
          <div class="name">
            NAME
          </div>
          <div class="totalPrice">
            $15.00
          </div>
          <div class="quantity">
            <span class="minus">-</span>
            <span>1</span>
            <span class="plus">+</span>
          </div>
         </div>
      </div>
      <div class="btn">
        <button class="close">CLOSE</button>
        <button class="checkOut">CHECK OUT</button>
      </div>
   </div>
 </div>

</div>
    
);

}