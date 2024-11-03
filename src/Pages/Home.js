import React from "react";
import '../css/home.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function home() {
    return (
    <div>
      <img className="bg" src="/Restaurant-src/ramen.jpg"></img>
      <div>
       <h1 className="Name">NANA RAMEN</h1>
       <button class="onlineOrd">Order Online</button>
       <Link to="/order" className="onlineOrd">Order Online</Link>

       
      </div>

      <hr className="section"></hr>
   <div className="AboutHome">
      <h1 className="About">About</h1>

      <p className="aboutElementHome">At Nana, we're commited to ofering top-quality Japanese cuisine and a warm, inviting dining experience. Since our opeing, we've focused on perfecting traditional
         dishes like ramen, gyoza, and takoyaki. Our dedication to authenticity and flavor is matched by our passion for creating new and exciting weekly specials,
          encouraging our guests to explore beyond their favourites and discover something fresh.
      </p>
   </div>
      
 

 
    </div>
   
    );
    }