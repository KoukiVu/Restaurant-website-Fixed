import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const NavBar = () => {
  return (
    <nav class="navBar">
  <Link to="/" className="siteTitle">NANA</Link>
    <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/menu">Menu</CustomLink>
    </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}
export default NavBar
