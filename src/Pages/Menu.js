import React from "react";
import '../css/menu.css';
export default function menu() {


return(
<div>   
<head>
  <link rel="stylesheet" href="menu.css"></link>
</head>
     <h1 className="Menu">Menu</h1>

<div class="ramenContainer">

     {/* RAMEN MENU */}
<div>
     <h2 className="RamenTitle">Ramen</h2>
      {/* Miso Ramen */}
     <div class="misoRamen ramenItem" >
            <img src="/Restaurant-src/MenuRamen1.jpg" class="card-img-top" alt="..."></img>
              <div class="Flavour">
               <h5>Miso Ramen</h5>
               <p>Ramen cooked with miso broth, fresh vegetables, Bok Choy, Chashu Pork, Nitamago(Egg) </p>
               </div>
     </div>

     {/* Shio Ramen */}
     <div class="shioRamen ramenItem" >
       <img src="/Restaurant-src/MenuRamen2.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Shio Ramen</h5>
               <p>Delicated and light flavour of Shio, top with variety of vegetables and Chashu Pork</p>
               </div>
     </div>

     {/* Spicy Chicken Ramen */}
     <div class="spicyChickenRamen ramenItem" >
       <img src="/Restaurant-src/MenuRamen3.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Chicken Ramen</h5>
               <p>Rich and spicy broth, top with tender pieces of seasoned chicken and vegetables</p>
               </div>
     </div>

     {/* Spicy Tonkotsu Ramen */}
     <div class="spicyTonkotsuRamen ramenItem" >
       <img src="/Restaurant-src/MenuRamen4.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Tonkotsu Ramen</h5>
               <p>Classic, Tonkotsu Ramen cooked with pork bone broth with Chasu Pork and vegetables</p>
               </div>
     </div>

     {/* Wonton Chicken Ramen */}
     <div class="wontonChickenRamen ramenItem" >
       <img src="/Restaurant-src/MenuRamen5.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Wonton Chicken Ramen</h5>
               <p>Chicken broth with delicate chicken-filled wonton, topped with vegetables mushrooms</p>
               </div>
     </div>
     
     
</div>


{/* SMALL PLATES MENU */}
<div>
     <h2 className="SmallPlatesTitle">Small Plates</h2>
      {/* Edamame */}
     <div class="edamame ramenItem" >
       <img src="/Restaurant-src/MenuEdamame.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Edamame</h5>
               <p className="edamameDescription">Lightly salted and boiled soybeans</p>
               </div>
     </div>
     
      {/* Salmon */}
      <div class="salmon ramenItem" >
       <img src="/Restaurant-src/MenuSalmon.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Salmon</h5>
               <p className="salmonDescription">Fresh salmon with soysauce fused with Jalapeno</p>
               </div>
     </div>

     {/* Steamed Buns */}
     <div class="buns ramenItem" >
       <img src="/Restaurant-src/MenuSteamedBuns.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Steamed Buns</h5>
               <p className="bunsDescription">Soft, fluffy steamed buns filled with tender pork cooked with soy sauce</p>
               </div>
     </div>

     {/* Gyoza */}
     <div class="gyoza ramenItem" >
       <img src="/Restaurant-src/MenuGyoza.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Gyoza</h5>
               <p className="gyozaDescription">Crispy, juicy savory Japanese gyoza</p>
               </div>
     </div>

     {/* Takoyaki */}
     <div class="takoyaki ramenItem" >
       <img src="/Restaurant-src/MenuTakoyaki.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Takoyaki</h5>
               <p className="takoyakiDescription">Golden and bite-sized balls filled with tender pieces of octopus</p>
               </div>
     </div>

</div>

</div>

</div>

); 
}