import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/cards/Card";
import { FaCalendarAlt } from "react-icons/fa";
import "./Main.css";
import newsCardImg1 from "../../assets/php.webp";
import newsCardImg2 from "../../assets/microsoft.jpg";
import newsCardImg3 from "../../assets/fortios.jpg";
import newsCardImg4 from "../../assets/asus.webp";
import compLogo1 from "../../assets/comp-logo-1.jpg";
import compLogo2 from "../../assets/comp-logo-2.png";
import compLogo3 from "../../assets/comp-logo-3.png";
import compLogo4 from "../../assets/comp-logo-4.png";

function Main() {
  return (
    <main>
      <div className="banner">
        <Banner />
      </div>
      <div className="card">
        <Card />
      </div>
      <div className="news">
        <div className="container">
          <div className="news-top">
            <h1>Новости</h1>
          </div>
          <div className="news-bottom">
            <div className="news-card">
              <img src={newsCardImg1} alt="" />
              <div className="news-card-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat praesentium non quisquam, tempora qui autem ut id
                  repellendus nihil obcaecati?
                </p>
                <div className="news-date">
                  <FaCalendarAlt />
                  <p>25-iyun, 2024</p>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={newsCardImg2} alt="" />
              <div className="news-card-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat praesentium non quisquam, tempora qui autem ut id
                  repellendus nihil obcaecati?
                </p>
                <div className="news-date">
                  <FaCalendarAlt />
                  <p>25-iyun, 2024</p>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={newsCardImg3} alt="" />
              <div className="news-card-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat praesentium non quisquam, tempora qui autem ut id
                  repellendus nihil obcaecati?
                </p>
                <div className="news-date">
                  <FaCalendarAlt />
                  <p>25-iyun, 2024</p>
                </div>
              </div>
            </div>
            <div className="news-card">
              <img src={newsCardImg4} alt="" />
              <div className="news-card-info">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Repellat praesentium non quisquam, tempora qui autem ut id
                  repellendus nihil obcaecati?
                </p>
                <div className="news-date">
                  <FaCalendarAlt />
                  <p>25-iyun, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="work">
        <div className="work-top">
          <h1>2023 yilda qilingan ishlar</h1>
        </div>
        <div className="work-bottom">
          <div className="container">
            <div className="work-wrapper">
              <div className="work-info">
                <p>+2,563</p>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
              <div className="work-info">
                <p>+4,520</p>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
              <div className="work-info">
                <p>+12,631</p>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
              <div className="work-info">
                <p>+10,210</p>
                <h4>Lorem ipsum dolor sit.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners">
        <div className="container">
          <div className="partners-top">
            <h1>Партнеры</h1>
          </div>
          <div className="partners-bottom">
            <img src={compLogo1} alt="" />
            <img src={compLogo2} alt="" />
            <img src={compLogo3} alt="" />
            <img src={compLogo4} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
