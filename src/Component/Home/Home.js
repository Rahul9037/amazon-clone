import React from "react";
import banner from "../../Assets/images/backgroundbanner.jpg";
import Product from "../Product/Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src={banner} alt="banner" />
        <div className="home__row">
          <Product
            id={Math.random()}
            title="Samsung 198 L Direct Cool Single Door 5 Star (2020) Refrigerator with Base Drawer  (Camellia Blue, RR21T2H2WCU/HL)"
            price={17490}
            image="https://rukminim1.flixcart.com/image/352/352/k4ss2a80/refrigerator-new/j/w/v/rr21t2h2wcu-hl-5-samsung-original-imafnmkbyzev8szv.jpeg?q=70"
            rating={4}
          />

          <Product
            id={Math.random()}
            title="Samsung Galaxy A21s (Black, 64 GB)  (4 GB RAM)"
            price={14999}
            image="https://rukminim1.flixcart.com/image/352/352/kbi9h8w0/mobile/g/g/c/samsung-galaxy-a21s-sm-a217fzkfins-original-imafsuyajewgnfcg.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={Math.random()}
            id={Math.random()}
            title="Singer FM 1408 Promise Electric Sewing Machine(Built-in Stitches 8)"
            price={6799}
            image="https://rukminim1.flixcart.com/image/352/352/kdt50nk0/sewing-machine/u/h/j/fm-1408-promise-singer-original-imafumkvaxfzvfph.jpeg?q=70"
            rating={3}
          />
          <Product
            key={Math.random()}
            id="4"
            title="Motorola HP-BT-Moto-Escape 200 with Google Assistant Bluetooth Headset  (Black, On the Ear)"
            price={1399}
            image="https://rukminim1.flixcart.com/image/352/352/jwfa5jk0/headphone/f/p/5/motorola-hp-bt-moto-escape-200-original-imafh44cegjahd92.jpeg?q=70"
            rating={4}
          />
          <Product
            key={Math.random()}
            id={Math.random()}
            title="Pigeon 14241 Grill(Black)"
            price={749}
            image="https://rukminim1.flixcart.com/image/352/352/kc29n680/sandwich-maker/m/s/j/pigeon-14241-original-imaftayd8hhqhxng.jpeg?q=70"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key={Math.random()}
            id={Math.random()}
            title="Samsung Q Series 163cm (65 inch) Ultra HD (4K) QLED Smart TV  (QA65Q8CNAKXXL / QA65Q8CNAKLXL)"
            price={258999}
            image="https://rukminim1.flixcart.com/image/416/416/jialea80/television/y/s/t/samsung-65q8cn-original-imaf64eyjppge4er.jpeg?q=70"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
