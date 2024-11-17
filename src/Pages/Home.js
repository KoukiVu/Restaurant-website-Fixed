import React from "react";
import '../css/home.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function home() {
    return (
    <div>
      <img className="bg" src="/Restaurant-src/ramen.jpg"></img>
            <div>
               <h1 className="Name">NANA RAMEN</h1>
               <div className="buttonContainer">
               <CustomLink className="onlineOrd" to="/orderMenu"><b>Order</b></CustomLink> <CustomLink className="onlineRes" to="/reservation"><b>Reservation</b></CustomLink>
               
               </div>
               
            </div>

            <hr className="sectionForAbout" />

            <div className="AboutHome">
            <h1 className="About">About</h1>

             <p className="aboutElementHome">At Nana, we're commited to ofering top-quality Japanese cuisine and a warm, inviting dining experience. Since our opeing, we've focused on perfecting traditional
                dishes like ramen, gyoza, and takoyaki. Our dedication to authenticity and flavor is matched by our passion for creating new and exciting weekly specials,
                encouraging our guests to explore beyond their favourites and discover something fresh.</p>
            </div>

            <div>
            <img className="imageAbout1" src="/Restaurant-src/about1ramen.jpg"></img>
            <img className="imageAbout2" src="/Restaurant-src/MenuRamen1.jpg"></img>
            <img className="imageAbout3" src="/Restaurant-src/MenuRamen2.jpg"></img>


          </div>

            <hr className="sectionForMenu" />

            <div className="MenuHome">
                <h1 className="Menu">Menu</h1>
                  {/* RAMEN MENU */}
<div>
     <h2 className="RamenTitle">Ramen</h2>
      {/* Miso Ramen */}
     <div class="misoRamen" >
            <img src="/Restaurant-src/MenuRamen1.jpg" class="card-img-top" alt="..."></img>
              <div class="Flavour">
               <h5>Miso Ramen</h5>
               <p>Ramen cooked with miso broth, fresh vegetables, Bok Choy, Chashu Pork, Nitamago(Egg) </p>
               </div>
     </div>

     {/* Shio Ramen */}
     <div class="shioRamen" >
       <img src="/Restaurant-src/MenuRamen2.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Shio Ramen</h5>
               <p>Delicated and light flavour of Shio, top with variety of vegetables and Chashu Pork</p>
               </div>
     </div>

     {/* Spicy Chicken Ramen */}
     <div class="spicyChickenRamen" >
       <img src="/Restaurant-src/MenuRamen3.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Chicken Ramen</h5>
               <p>Rich and spicy broth, top with tender pieces of seasoned chicken and vegetables</p>
               </div>
     </div>

     {/* Spicy Tonkotsu Ramen */}
     <div class="spicyTonkotsuRamen" >
       <img src="/Restaurant-src/MenuRamen4.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Spicy Tonkotsu Ramen</h5>
               <p>Classic, Tonkotsu Ramen cooked with pork bone broth with Chasu Pork and vegetables</p>
               </div>
     </div>

     {/* Wonton Chicken Ramen */}
     <div class="wontonChickenRamen" >
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
     <div class="edamame" >
       <img src="/Restaurant-src/MenuEdamame.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Edamame</h5>
               <p className="edamameDescription">Lightly salted and boiled soybeans</p>
               </div>
     </div>
     
      {/* Salmon */}
      <div class="salmon" >
       <img src="/Restaurant-src/MenuSalmon.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Salmon</h5>
               <p className="salmonDescription">Fresh salmon with soysauce fused with Jalapeno</p>
               </div>
     </div>

     {/* Steamed Buns */}
     <div class="buns" >
       <img src="/Restaurant-src/MenuSteamedBuns.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Steamed Buns</h5>
               <p className="bunsDescription">Soft, fluffy steamed buns filled with tender pork cooked with soy sauce</p>
               </div>
     </div>

     {/* Gyoza */}
     <div class="gyoza" >
       <img src="/Restaurant-src/MenuGyoza.jpg" class="card-img-top" alt="..."></img>
               <div class="Flavour">
               <h5>Gyoza</h5>
               <p className="gyozaDescription">Crispy, juicy savory Japanese gyoza</p>
               </div>
     </div>

     {/* Takoyaki */}
     <div class="takoyaki" >
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

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end:true })
        return (
          <li className={`nav-item ${isActive ? "active" : ""}`}>
                <Link to={to} {...props}>
                {children}
                </Link>
            </li>
        )
      }