import React from "react";
import logo from "../../assets/logo-2.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { TbBrandTelegram } from "react-icons/tb";
import { MdContactEmergency } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-all">
          <div className="footer-left">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              ipsam similique quis adipisci earum sit porro aliquam
              reprehenderit?
            </p>
          </div>
          <div className="footer-center">
            <FaFacebook className="footer-facebook" />
            <AiFillTwitterCircle className="footer-twitter" />
            <AiFillYoutube className="footer-youtube" />
          </div>
          <div className="footer-right">
            <div className="footer-item">
              <FaPhoneAlt /> <p>Phone: 71-203-00-23</p>
            </div>
            <div className="footer-item">
              <TfiEmail />
              <p>E-Mail: info@uzcert.uz</p>
            </div>
            <div className="footer-item">
              <TbBrandTelegram />
              <p>Submit a cyber incident report: incident@uzcert.uz</p>
            </div>
            <div className="footer-item">
              <MdContactEmergency />
              <p>
                Address: Taras Shevchenko street, 20, Mirabad district, Tashkent
                city
              </p>
            </div>
            <div className="footer-item">
              <FaFacebook className="footer-facebook" />
              <AiFillTwitterCircle className="footer-twitter" />
              <AiFillYoutube className="footer-youtube" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
