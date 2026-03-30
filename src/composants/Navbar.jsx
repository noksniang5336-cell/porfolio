import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";


const Navbar = () => {

  const [ openMenu , setOpenMenu ] = useState(false)
  console.log(openMenu)
   

  return (
    <nav> 
       

        {/* au milieu */}

        <div className="lien">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/Project">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
        </div>

        {/* droite */}
         <div className="menu">
             <NavLink to="/Apropos">
               <button className="bb">Apropos</button>
                </NavLink>
               </div>
        

         {/* volet  */}

          {
            openMenu && (
            <div className="lien_mobile">
              <NavLink to="/">
                <p>Accueil</p>
              </NavLink>
              <NavLink to="/Projets">
               <p>Projets</p>
              </NavLink>
              <NavLink to="/contact" >
               <p>Contact</p>
              </NavLink>
           </div>
            )
          }



    </nav>
  )
}

export default Navbar
