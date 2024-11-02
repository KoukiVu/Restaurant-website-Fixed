import React from "react";
import '../css/menu.css';
import { Link } from 'react-router-dom';
import { UseState } from 'react';
export default function menu() {


return(
<div>   
<head>
  <link rel="stylesheet" href="menu.css"></link>
</head>
     <h1 className="Menu">Menu</h1>
<div>
     <h2 className="RamenTitle">Ramen</h2>
      {/* Miso Ramen */}
     <div class="misoRamen" >
            <img src="/Restaurant-src/MenuRamen1.jpg" class="card-img-top" alt="..."></img>
              <div class="Flavour">
               <h5>Miso Ramen</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>

     {/* Shio Ramen */}
     <div class="shioRamen" >
       <img src="/Restaurant-src/MenuRamen2.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Shio Ramen</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>

     {/* Spicy Chicken Ramen */}
     <div class="spicyChickenRamen" >
       <img src="/Restaurant-src/MenuRamen3.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Chicken Ramen</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>
     
</div>

<div>
     <h2 className="SmallPlatesTitle">Small Plates</h2>
      {/* Edamame */}
     <div class="edamame" >
       <img src="/Restaurant-src/MenuEdamame.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Edamame</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>
     
      {/* Salmon */}
      <div class="salmon" >
       <img src="/Restaurant-src/MenuSalmon.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Salmon</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>

     {/* Steamed Buns */}
     <div class="buns" >
       <img src="/Restaurant-src/MenuSteamedBuns.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Steamed Buns</h5>
               <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               </div>
     </div>

</div>

</div>

); 
}