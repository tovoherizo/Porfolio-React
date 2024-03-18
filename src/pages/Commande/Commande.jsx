import React from 'react'
import './Commande.css';

function Commande() {
  return (
    <body>
      <div className="card">
        <p className="livraison">verification livraison</p>
        <input className="verif" type="text" placeholder="Nom" />
        <input className="verif" type="text" placeholder="Prenom" />
        <input className="verif" type="email" placeholder="email" />
        <input className="verif" type="text" placeholder="adress" />
        <input className="verif" type="tel" placeholder="tel" />
        <button className="veri">envoyer</button>
      </div>
    </body>
  );
}

export default Commande