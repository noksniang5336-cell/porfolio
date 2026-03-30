import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contactez-moi</h2>
      <p>N'hésitez pas à me contacter pour vos projets </p>

      <div className="contact-info">
        <p><strong>Email :</strong> nogayeniang2792@email.com</p>
        <p><strong>Téléphone :</strong> +221 77 956 27 92</p>
        <p><strong>Localisation :</strong> Thiès, Sénégal</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;