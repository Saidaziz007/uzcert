import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

import "./Card.css";

function Card() {
  return (
    <div className="container">
      <div className="card-position">
        <div className="card-wrapper">
          <div className="card-item">
            <div className="card-left">
              <FaLightbulb />
            </div>
            <div className="card-right">
              <p>
                <b>Lorem ipsum dolor, </b>sit amet consectetur adipisicing elit.
                <b>Saepe</b> vero magnam <b>eum beatae mollitia</b>. Incidunt
                ipsa velit nulla. <b>Illum vero perferendis</b> dolorum quo
                tenetur quae accusamus, doloremque <b>est dignissimos</b> omnis!
              </p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-left">
              <FaHandshake />
            </div>
            <div className="card-right">
              <p>
                <b>Lorem ipsum dolor, sit amet consectetur</b> adipisicing elit.
                Saepe vero magnam <b>eum beatae mollitia</b>. Incidunt ipsa
                velit nulla. <b>Illum vero perferendis</b> dolorum quo tenetur
                quae accusamus, <b>doloremque est dignissimos</b> omnis!
              </p>
            </div>
          </div>
          <div className="card-item">
            <div className="card-left">
              <FaClock />
            </div>
            <div className="card-right">
              <p>
                Lorem ipsum dolor, <b>sit amet consectetur adipisicing</b> elit.
                Saepe <b>vero magnam eum beatae</b> mollitia. Incidunt ipsa
                velit nulla. Illum vero <b>perferendis dolorum</b> quo tenetur
                quae accusamus, doloremque est <b>dignissimos omnis!</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
