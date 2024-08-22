import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-all">
      <div className="container">
        <div className="banner-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            aut ullam cumque tenetur suscipit eveniet maxime eum architecto
            corporis atque odit explicabo eos consequatur, sint voluptates quia
            nostrum nemo libero saepe qui. Ipsam ipsum quaerat deserunt
            veritatis nemo facere eveniet.
          </p>
          <Link to={"/about"}>
            <button className="banner-btn">Узнать больше</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
