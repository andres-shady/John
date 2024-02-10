
import "./header.css";
import React from'react'
import {useState} from "react"

     function Header(){
      const [showLinks,setShowlinks]=useState(false)

      const handleShowLinks= () =>{
        setShowlinks(!showLinks)
      }
       return(
        <nav className={`navbar ${showLinks? "show-nav" :"hide-nav"} `} >
        <div className="navbar__logo"><logo>Navbar</logo></div> 
      <ul className="navbar__links"  > 

        <li className="navbar__items slideInDwn-1" >
        <a href="/" className="navbar__link">Acueille</a>
        </li> 

        <li className="navbar__items slideInDwn-2">
        <a href="/Blog" className="navbar__link">Blog</a>
        </li> 

        <li className="navbar__items slideInDwn-3">
        <a href="/Realisation" className="navbar__link">Realisation</a>
        
        </li> 
        <li className="navbar__items slideInDwn-4">
        <a href="/MentionLegal" className="navbar__link">Mention Legal</a>
        </li> 

        <li className="navbar__items slideInDwn-5">
        <a href="/Service" className="navbar__link">Service</a>
        </li> 

        <li className="navbar__items slideInDwn-6" >
        <a href="/Contact" className="navbar__link">Contact</a>
        </li> 

        </ul>

      <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger__bar" ></span>
        </button>
        
        </nav>
       )
     } 
     export default Header;
    
      
  
 

 