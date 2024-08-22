import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Header.css";
import logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="container">
          <div className="nav-all">
            <div className="nav-left">
              <NavLink to={"/"}>
                <img className="nav-logo" src={logo} alt="" />
              </NavLink>
              <p>Uzbekistan Computer Emergency Response Team</p>
            </div>
            <div className="nav-right">
              <ul className="nav-list">
                <NavLink to={"/about"}>
                  <li className="nav-item">о нас</li>
                </NavLink>
                <NavLink to={"/service"}>
                  <li className="nav-item">услуги</li>
                </NavLink>
                <li className="nav-item">новости</li>
              </ul>
              <select name="languages" id="">
                <option value="russian">русский</option>
              </select>
              <NavLink to={"/service"}>
                <button className="nav-btn">сообщить об инциденте</button>
              </NavLink>
              <IoSearch className="nav-search" />
              <FiMenu className="nav-menu" />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
