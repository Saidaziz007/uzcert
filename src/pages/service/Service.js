import React from "react";
import "./Service.css";
import { BiSolidCoinStack } from "react-icons/bi";
import { MdConnectWithoutContact } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import service1 from "../../assets/service-1.jpg";
import service2 from "../../assets/service-2.jpeg";
import service3 from "../../assets/service-3.jpg";

function Service() {
  return (
    <div className="service">
      <div className="service-hero">
        <div className="container">
          <div className="service-hero-info">
            <h1>Xizmatlar</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit saepe
              ullam veritatis eligendi, dolor quasi animi deserunt maiores eaque
              quam commodi dignissimos earum deleniti neque architecto quaerat
              officiis dicta enim rem natus quod hic nemo asperiores fugit!
              Atque, cupiditate culpa sequi ipsa deserunt animi distinctio hic
              eligendi vel. Consectetur, dolores?
            </p>
          </div>
        </div>
      </div>
      <div className="service-main">
        <div className="container">
          <div className="service-wrapper">
            <div className="service-card">
              <BiSolidCoinStack />
              <h1>Ma'lumotlar yig'ish</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                natus tenetur sunt soluta quibusdam accusamus saepe ipsa quas
                dolore blanditiis rem vitae nobis excepturi, voluptatibus eius
                ipsam provident pariatur quisquam dignissimos iste itaque cumque
                magni? Quas assumenda ratione dolor quam.
              </p>
            </div>
            <div className="service-card">
              <MdConnectWithoutContact />
              <h1>Tarmoq hisoboti</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                natus tenetur sunt soluta quibusdam accusamus saepe ipsa quas
                dolore blanditiis rem vitae nobis excepturi, voluptatibus eius
                ipsam provident pariatur quisquam dignissimos iste itaque cumque
                magni? Quas assumenda ratione dolor quam.
              </p>
            </div>
            <div className="service-card">
              <FaLaptopCode />
              <h1>Tergovni qo'llab-quvvatlash</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                natus tenetur sunt soluta quibusdam accusamus saepe ipsa quas
                dolore blanditiis rem vitae nobis excepturi, voluptatibus eius
                ipsam provident pariatur quisquam dignissimos iste itaque cumque
                magni? Quas assumenda ratione dolor quam.
              </p>
            </div>
          </div>
          <div className="service-post">
            <div className="service-left">
              <img src={service1} alt="" />
            </div>
            <div className="service-right">
              <h1>Ma'lumotlar yeg'ish</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perspiciatis quam, quas, laudantium minima aperiam praesentium
                quisquam esse soluta perferendis eos magnam nihil corrupti, eius
                dignissimos quis sunt provident nostrum!
              </p>
            </div>
          </div>
          <div className="service-post">
            <div className="service-right">
              <h1>Tarmoq hisoboti</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perspiciatis quam, quas, laudantium minima aperiam praesentium
                quisquam esse soluta perferendis eos magnam nihil corrupti, eius
                dignissimos quis sunt provident nostrum!
              </p>
            </div>
            <div className="service-left">
              <img src={service2} alt="" />
            </div>
          </div>
          <div className="service-post">
            <div className="service-left">
              <img src={service3} alt="" />
            </div>
            <div className="service-right">
              <h1>Tergovni qo'llab-quvvatlash</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                perspiciatis quam, quas, laudantium minima aperiam praesentium
                quisquam esse soluta perferendis eos magnam nihil corrupti, eius
                dignissimos quis sunt provident nostrum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
