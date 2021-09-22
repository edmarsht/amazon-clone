import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123456"
          title="Trottinette électrique Adulte de 350W à Haute Puissance, Scooter électrique Rétractable, Vitesse Maximale 25KM/H, Autonomie Maximale 45 KM, écran LCD,Black. Edison the Petit | Lampe de table/d'extérieur/de chevet | Sans câble & rechargeable via USB Indoor & Outdoor | Blanc"
          image="https://cdn.shopify.com/s/files/1/0279/1381/4091/products/trottinette-electrique-pure-air-go-Gen-2-gris-350-1200px_1080x.jpg?v=1627026068"
          price={319.0}
          rating={5}
        />
        <Product
          id="123456"
          title="Westt Torque Z Casque Moto Modulable Double Visière pour Scooter Chopper - Casque de Moto Homme et Femme en Noir Mat - ECE Homologué Homme"
          image="https://moto-attitude.com/10664-thickbox_default/casque-hjc-rpha-11-venom-2-marvel-mc1.jpg"
          price={56.99}
          rating={3}
        />
      </div>
      <div className="home__row">
        <Product
          id="123456"
          title="FTrampoline Springcare Cornilleau - 305 cm."
          image="https://www.amazon.fr/images/I/71S9ke+h-lS._AC_SX425_.jpg"
          price={375.99}
          rating={2}
        />
        <Product
          id="123456"
          title="Russell Hobbs Mixeur Plongeant Multifonction 3en1 500ml, Mélange, Hache, Fouette, Mixe, Compatible Lave Vaisselle - Rouge 24700-56 Desire"
          image="https://www.amazon.fr/images/I/61VQKtMHyiL._AC_SL1080_.jpg"
          price={30.99}
          rating={5}
        />
        <Product
          id="123456"
          title="The Book Thief: The life-affirming number one international bestseller Broché – 15 septembre 2016."
          image="https://www.amazon.fr/images/I/81S6VejOlEL.jpg"
          price={11.59}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id="123456"
          title="Samsung C49RG90, Ecran PC Gaming incurvé, Format Ultra-Large, Dalle VA 49, Résolution 5K (5120 x 1440), 120 Hz, 4ms, HDR 1000, QLED, AMD Freesync, Noir"
          image="https://www.amazon.fr/images/I/81rus0UFhsL._AC_SL1500_.jpg"
          price={998.55}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
