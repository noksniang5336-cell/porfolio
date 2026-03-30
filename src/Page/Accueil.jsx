import React, { useState } from "react";
import Project from "../Page/Project";
import Contact from  "../Page/Contact";
import Hero from  "../composants/Hero";
import Apropos from  "../Page/Apropos";
    
    function Accueil (){
        return(
           
            <main>
                <Hero/>
                
                <Project/>
                <Contact/>
            </main>
        )

       }
export default Accueil;
