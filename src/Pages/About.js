import React from "react";
import '../css/about.css';

export default function about() {
    return (
    <div>
         <h1 className="About">About</h1>

         <p className="aboutElement">At Nana, we're commited to offering top-quality Japanese cuisine and a warm, inviting dining experience. Since our opeing, we've focused on perfecting traditional
            dishes like ramen, gyoza, and takoyaki. Our dedication to authenticity and flavor is matched by our passion for creating new and exciting weekly specials,
            encouraging our guests to explore beyond their favourites and discover something fresh.
         </p>

         <div>
      <img className="imageAbout1" src="/Restaurant-src/about1ramen.jpg"></img>
      <img className="imageAbout2" src="/Restaurant-src/MenuRamen1.jpg"></img>
      <img className="imageAbout3" src="/Restaurant-src/MenuRamen2.jpg"></img>


          </div>
    </div>

   
    );

    }