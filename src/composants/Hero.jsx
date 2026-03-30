import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";
function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>Bonjour, je suis Nogaye</h2>
                <p>
                    Développeuse passionnée spécialisée en **React** et **Laravel**. <br />
                    Je crée des applications modernes, rapides et élégantes.
                </p>
                <Link to="/Project">
                    <button className="bb">Voir mes projets</button>
                </Link>
            </div>

            <div className="hero-image">
             <img src={profileImg} alt="profile" />
           </div>
        </section>
    );
}

export default Hero;