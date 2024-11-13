import React from "react";
import '../css/home.css';
import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function home() {
    return (
    <div>
      <img className="bg" src="/Restaurant-src/ramen.jpg"></img>
            <div>
               <h1 className="Name">NANA RAMEN</h1>
               <CustomLink className="onlineOrd" to="/orderMenu">Order Online</CustomLink>
               <CustomLink className="onlineOrd" to="/reservation">Reservation</CustomLink>
            </div>

            <hr className="section" />

            <div className="AboutHome">
            <h1 className="About">About</h1>

             <p className="aboutElementHome">At Nana, we're commited to ofering top-quality Japanese cuisine and a warm, inviting dining experience. Since our opeing, we've focused on perfecting traditional
                dishes like ramen, gyoza, and takoyaki. Our dedication to authenticity and flavor is matched by our passion for creating new and exciting weekly specials,
                encouraging our guests to explore beyond their favourites and discover something fresh.</p>
            </div>

            <hr className="section" />

            <div className="MenuHome">
                <h1 className="Menu">Menu</h1>
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