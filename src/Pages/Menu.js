import React from "react";
import '../css/menu.css';
export default function menu() {
return(
<div>   
<head>
  <link rel="stylesheet" href="menu.css"></link>
</head>
     <h1 className="Menu">Menu</h1>
<div>
     <h2 className="RamenTitle">Ramen</h2>
     
    <a href="https://www.google.com/"> <img className="menuRamen1" src="/Restaurant-src/MenuRamen1.jpg"></img> </a>
     <img className="menuRamen2" src="/Restaurant-src/MenuRamen2.jpg"></img>
     <img className="menuRamen3" src="/Restaurant-src/MenuRamen3.jpg"></img>
</div>

<div>
     <h2 className="SmallPlatesTitle">Small Plates</h2>
     
     <img className="menuEdamame" src="/Restaurant-src/MenuEdamame.jpg"></img>
     <img className="menuSalmon" src="/Restaurant-src/MenuSalmon.jpg"></img>
     <img className="menuSteamedBuns" src="/Restaurant-src/MenuSteamedBuns.jpg"></img>


</div>

</div>

); 
}