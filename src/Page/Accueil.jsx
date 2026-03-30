import React, { useState } from "react";
import Project from "../Page/Project";
import Contact from  "../Page/Contact";
import Hero from  "../composants/Hero";
import Competences from '../composants/Competences';

    
    function Accueil (){
        return(
           
            <main>
                <Hero/>
                <Project/>
                <Competences/>
                <Contact/>
            </main>
        )

       }
export default Accueil;
